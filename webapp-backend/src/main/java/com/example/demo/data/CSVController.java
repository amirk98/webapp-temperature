package com.example.demo.data;

import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CSVController {

    @Autowired
    CSVRepo service;

    @PostMapping("/upload")
    public String uploadData(@RequestParam("file")MultipartFile file) throws Exception {
        List<CSVDetails> dataList = new ArrayList<>();
        InputStream inputStream = file.getInputStream();
        CsvParserSettings setting = new CsvParserSettings();
        setting.setHeaderExtractionEnabled(true);
        CsvParser parser = new CsvParser(setting);
        List<Record> parseAllRecords = parser.parseAllRecords(inputStream);
        parseAllRecords.forEach(record -> {
            CSVDetails detail = new CSVDetails();
            detail.setUuid(record.getString("uuid"));
            detail.setNine(record.getString("nine"));
            detail.setUnix(record.getString("unix"));
            detail.setTemp_C(Double.parseDouble(record.getString("temp_C")));
            dataList.add(detail);
        });
        service.saveAll(dataList);
        return "Upload Successfully";
    }
}
