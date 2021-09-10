import pick from "lodash.pick";

export interface Flag {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         string;
    subregion:      string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini:           number;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:       string;
    name:          string;
    otherAcronyms: string[];
    otherNames:    string[];
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
}


export default class CountryService{

    public static async getFlags(n?: number) : Promise<Flag[]>{
        console.log("FETCHING...")
        return await fetch("https://restcountries.eu/rest/v2/all").then(
            (res) => res.json()
        ).catch(
            () => Promise.resolve([])
        ).then(
            async (data : Flag[]) => {
                return data.slice(0, n)
            }
        )
    }

    public static async getFlagsByRegion(name: string) : Promise<Flag[]>{
        console.log("FETCHING...")
        return await fetch(`https://restcountries.eu/rest/v2/region/${name.toLowerCase()}`).then(
            (res) => res.json()
        ).catch(
            () => Promise.resolve([])
        ).then(
            async (data : Flag[]) => {
                return data;
            }
        )
    }
}