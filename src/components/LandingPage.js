import React from 'react';

class LocaleInfo {
  constructor(locale) {
    this.locale = locale;
    const localeTupple = locale.split('_');
    this.localeLangCode = localeTupple[0];
    this.localeCountryCode = localeTupple[1];
  }
  getLocale() {
    return this.locale;
  }
  getLocaleInFormat(separator) {
    if (this.localeCountryCode) {
      return `${this.localeLangCode}${separator}${this.localeCountryCode}`;
    }
    return this.localeLangCode;
  }
  getLocaleLangCode() {
    return this.localeLangCode;
  }
  getLocaleCountryCode() {
    return this.getLocaleCountryCode;
  }
}

class LanguageInfo {
  constructor(languageCode, languageName, direction) {
    this.languageCode = languageCode;
    this.languageName = languageName;
    this.direction = direction;
  }
  getLanguageCode() {
    return this.languageCode;
  }
  getLanguageName() {
    return this.languageName;
  }
  getDirection() {
    return this.direction;
  }
}

class CountryInfo {
  constructor(countryCode, countryName, defaultLocale, otherLocales) {
    this.countryCode = countryCode;
    this.countryName = countryName;
    this.defaultLocale = defaultLocale;
    this.otherLocales = otherLocales;
  }
  getCountryCode() {
    return this.countryCode;
  }
  getCountryName() {
    return this.countryName;
  }
  getDefaultLocale() {
    return this.defaultLocale;
  }
  getOtherLocales() {
    return this.otherLocales;
  }
}

class PageEnv {
  constructor(countryInfo, localeInfo, languages) {
    this.countryInfo = countryInfo;
    this.localeInfo = localeInfo;
    this.languages = languages;
    this.countryName = countryInfo.getCountryName();
  }
  getCountryInfo() {
    return this.countryInfo;
  }
  getLocaleInfo() {
    return this.localeInfo;
  }
  getCountryName() {
    return this.getCountryInfo().getCountryName();
  }
  getOtherLocales() {
    return this.getLocaleInfo().getOtherLocales();
  }
}

const LandingPage = () => {
  return <div>LandingPage</div>;
};

export default LandingPage;
