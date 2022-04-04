import { json_trends, json_user_history } from './MockData';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MAX_SUGGESTIONS = 10;

const json_en_IL = {
  locale: 'en-IL',
  country: {
    countryCode: 'IL',
    countryName: 'Israel'
  },
  languages: [
    {
      languageCode: 'en',
      languageName: 'English',
      direction: 'ltr'
    },
    {
      languageCode: 'iw',
      languageName: 'עברית',
      languageNameEnglish: 'Hebrew',
      direction: 'rtl'
    },
    {
      languageCode: 'ar',
      languageName: 'العربية',
      languageNameEnglish: 'Arabic',
      direction: 'rtl'
    }
  ]
};

const json_fred = {
  firstName: 'Frederic',
  lastName: 'ZeDude',
  email: 'fredzedude@gmail.com',
  img_type: 'user',
  img_src: 'fred.jpg'
};

const json_search_history = [];

const json_user_history_loaded = json_user_history;

const searchHistory = (searchString) => {
  // const children = [];
  //  console.log(JSON.stringify(children.flat()));
  return wait(500).then(() => {
    const response = {
      status: 'ok',
      status_code: 200,
      data: json_user_history_loaded
    };
    if (response.status_code !== 200) {
      const reason = 'Problem retrieving history';
      console.error(`${reason}`, response);
      Promise.reject(reason);
    }
    const searchResults = [];
    for (const hist of json_search_history) {
      if (hist.title.startsWith(searchString)) {
        searchResults.push({
          guid: hist.guid,
          text: hist.title,
          textPrefix: '',
          boldText: '',
          iconuri: hist.iconuri,
          uri: hist.uri,
          type: 'hist'
        });
      }
      if (searchResults.length === MAX_SUGGESTIONS) {
        break;
      }
    }
    /*
  suggestedItem {
      guid: string,
      text: string,
      textPrefix: string,
      boldText: string,
      imgSrc: string,
      uri: string,
      type: trend | hist | search | promo
  }
  */

    if (searchResults.length < MAX_SUGGESTIONS) {
      for (const hist of response.data) {
        if (hist.title.startsWith(searchString)) {
          searchResults.push({
            guid: hist.guid,
            text: hist.title,
            textPrefix: '',
            boldText: '',
            iconuri: hist.iconuri,
            uri: hist.uri,
            type: 'hist'
          });
        }
        if (searchResults.length === MAX_SUGGESTIONS) {
          break;
        }
      }
    }
    console.log('searchHistory before return', searchResults);
    return searchResults;
  });
};

const fetchTrends = () => {
  // const children = [];
  //  console.log(JSON.stringify(children.flat()));
  return wait(500).then(() => {
    const response = { status: 'ok', status_code: 200, data: json_trends };
    if (response.status_code !== 200) {
      const reason = 'Problem retrieving trends';
      console.error(`${reason}`, response);
      Promise.reject(reason);
    }

    const trends = [];
    for (const trend of response.data) {
      trends.push({
        guid: trend.guid,
        text: trend.title,
        textPrefix: '',
        boldText: '',
        iconuri: trend.iconuri,
        uri: trend.uri,
        type: 'trend'
      });
      if (trends.length === MAX_SUGGESTIONS) {
        break;
      }
    }
    console.log('fetchTrends before return', trends);
    return trends;
  });
};

const fetchPageEnv = (currentLocale) => {
  return wait(500).then(() => {
    const response = { status: 'ok', status_code: 200, data: json_en_IL };
    if (response.status_code !== 200) {
      const reason = 'Problem retrieving page environment';
      console.error(`${reason}`, response);
      Promise.reject(reason);
    }
    let pageEnv = Object.assign({}, response.data);
    pageEnv.otherLanguages = [];
    response.data.languages.forEach((lang, index) => {
      if (index === 0) {
        pageEnv.selectedLanguage = lang;
      } else {
        pageEnv.otherLanguages.push(lang);
      }
    });
    return pageEnv;
  });
};

const fetchUser = () => {
  return wait(500).then(() => {
    const response = { status: 'ok', status_code: 200, data: json_fred };
    if (response.status_code !== 200) {
      const reason = 'Problem retrieving page user';
      console.error(`${reason}`, response);
      Promise.reject(reason);
    }
    let user = Object.assign({}, response.data);
    user.fullName = `${user.firstName} ${user.lastName}`;
    return user;
  });
};

const removeFromHistory = (guid) => {
  let foundIndex = json_search_history.findIndex((hist) => hist.guid === guid);
  if (foundIndex > -1) {
    const deleted = json_search_history.splice(foundIndex, 1);
    console.log('removeFromHistory, json_search_history', deleted);
    return deleted;
  }
  foundIndex = json_user_history.findIndex((hist) => hist.guid === guid);
  if (foundIndex > -1) {
    const deleted = json_user_history.splice(foundIndex, 1);
    console.log('removeFromHistory, json_user_history', deleted);
    return deleted;
  }
};

export {
  fetchPageEnv,
  fetchTrends,
  fetchUser,
  searchHistory,
  removeFromHistory,
  MAX_SUGGESTIONS
};
