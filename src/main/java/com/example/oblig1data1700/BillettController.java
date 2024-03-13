package com.example.oblig1data1700;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/billett")
public class BillettController {
    private List<Billett> billettList = new ArrayList<>();

    @PostMapping("/kjop")
    public void kjopBillett(@RequestBody Billett billett) {
        billettList.add(billett);
    }
    @GetMapping("/alle")
    public List<Billett> hentAlleBilletter() {
        return billettList;
    }
}
