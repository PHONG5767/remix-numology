import React, { useContext } from "react";
import { MyContext } from "../../../Route";

const FullName = () => {
    const { name } = useContext(MyContext)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    const normalizedFullName = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");

    const characterArray = normalizedFullName.replace(/\s/g, '').split('');

    const fullNameArray = normalizedFullName.split(' ');

    const firstFullName = fullNameArray.map(name => name[0]);

    const firstLastMiddleName = normalizedFullName.split(' ');
    
    const vowelName = [];
    const consonantName = [];

    for (const char of characterArray) {
        if (vowels.includes(char)) {
            vowelName.push(char);
        } else {
            consonantName.push(char);
        }
    }
    
    return { normalizedFullName, characterArray, firstFullName, firstLastMiddleName, vowelName, consonantName }

}

export default FullName
