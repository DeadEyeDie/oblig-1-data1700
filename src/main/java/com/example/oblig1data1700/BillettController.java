package com.example.oblig1data1700;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/billett")
public class BillettController {
    private List<Billett> billettList = new ArrayList<>();

    @PostMapping("/kjop")
    public ResponseEntity<String> kjopBillett(@RequestBody Billett billett) {
        billettList.add(billett);
        return ResponseEntity.ok("Billett kjøpt vellykket!");
    }
    @GetMapping("/alle")
    public List<Billett> hentAlleBilletter() {
        return billettList;
    }
}
