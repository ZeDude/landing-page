import React, { useState, useEffect } from 'react';
import {
  fetchTrends,
  searchHistory,
  removeFromHistory,
  MAX_SUGGESTIONS
} from '../controllers/LandingPageController';
import FeelLucky from './FeelLucky';
import useComponentVisible from '../utils/useComponentVisible';

let loadedTrends = [];
let displayCount = 0;

const SearchInput = () => {
  const iconHistory = 'sb27';
  const iconSearch = 'sb43';
  const [searchString, setSearchString] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  let searchClicked = false;
  let deletedGuid = null;
  const boldText = 'test';
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const handleInput = (event) => {
    setSearchString(event.target.value);
  };
  const removeFromHistoryHandler = (event, guid) => {
    event.preventDefault();
    const deleted = removeFromHistory(guid);
    if (deleted) {
      const changedSuggestions = suggestions.filter(
        (suggestion) => suggestion.guid !== guid
      );
      deletedGuid = guid;
      setSuggestions(changedSuggestions);
      //   searchHistory(searchString)
      //     .then((searches) => {
      //       let results = [];
      //       if (searches.length < MAX_SUGGESTIONS) {
      //         results = loadedTrends.slice(0, MAX_SUGGESTIONS - searches.length);
      //       }
      //       results = results.concat(searches);
      //       setSuggestions(results);
      //       //            console.log('searchHistory, setSuggestions', results);
      //     })
      //     .catch((error) => {
      //       // manage error
      //     });
    }
  };
  const selectedInputHandler = (event, guid) => {
    event.preventDefault();
    setTimeout(function () {
      const foundSuggestion = suggestions.find(
        (suggestion) => suggestion.guid === guid
      );
      if (foundSuggestion && guid !== deletedGuid) {
        searchClicked = true;
        setSearchString(foundSuggestion.text);
        performSearch(foundSuggestion.text);
      }
    }, 0);
  };
  const performSearch = (selectedString) => {
    if (selectedString || searchString) {
      const searchWords = (selectedString || searchString).replace(/ +/g, '+');
      window.location.href = `https://www.google.com/search?q=${searchWords}`;
    }
  };
  /*
  suggestedItem {
      guid: string,
      text: string,
      textPrefix: string,
      boldText: string,
      imgSrc: string,
      uri: string,
      type: trend | hist | search
  }
  */
  useEffect(() => {
    fetchTrends()
      .then((trends) => {
        loadedTrends = trends;
        setSuggestions(trends);
      })
      .catch((error) => {
        // manage error
      });
  }, []);
  useEffect(() => {
    if (!searchClicked) {
      if (!searchString) {
        setSuggestions(loadedTrends);
      } else {
        searchHistory(searchString)
          .then((searches) => {
            let results = [];
            if (searches.length < MAX_SUGGESTIONS) {
              results = loadedTrends.slice(
                0,
                MAX_SUGGESTIONS - searches.length
              );
            }
            results = results.concat(searches);
            setSuggestions(results);
            //            console.log('searchHistory, setSuggestions', results);
          })
          .catch((error) => {
            // manage error
          });
      }
    }
  }, [searchString, setSearchString]);
  let trendCount = 0;
  displayCount++;
  return (
    <div>
      <form
        className="margin_top_40"
        onClick={() => {
          setIsComponentVisible(true);
        }}
      >
        <div className="s-box">
          <img src="img/search.svg" className="search-icon" />
          <input
            type="text"
            id="searchString"
            name="searchString"
            value={searchString}
            onChange={(e) => handleInput(e)}
            className="s-input"
            autoComplete="off"
          />
          <img
            src="img/vs.png"
            className="vs-icon"
            aria-label="Search by voice"
            tooltip="Search by voice"
          />
          <div ref={ref}>
            {isComponentVisible && (
              <div className="suggestionList">
                <ul>
                  {suggestions.map((suggestion, ind) => {
                    let iconClass = iconSearch;
                    switch (suggestion.type) {
                      case 'trend':
                        if (trendCount === 0) {
                          trendCount = trendCount + 1;
                          return (
                            <span key={'sp_' + suggestion.guid + displayCount}>
                              <li
                                key={'trendTitle' + displayCount}
                                className="suggestionItem"
                                style={{ textAlign: 'left', color: '#666' }}
                              >
                                Trending searches
                              </li>
                              <li
                                key={suggestion.guid + displayCount}
                                className="suggestionItem  suggestionActive"
                                onClick={(e) => {
                                  selectedInputHandler(e, suggestion.guid);
                                }}
                              >
                                <div
                                  key={'sb33a' + ind + displayCount}
                                  className="sbic sb33"
                                >
                                  <div
                                    key={'sb33b' + ind + displayCount}
                                    className="suggestionText"
                                  >
                                    {suggestion.text}
                                  </div>
                                </div>
                              </li>
                            </span>
                          );
                        }

                        return (
                          <li
                            key={suggestion.guid + displayCount}
                            className="suggestionItem  suggestionActive"
                            onClick={(e) => {
                              selectedInputHandler(e, suggestion.guid);
                            }}
                          >
                            <div
                              key={'sb33aa' + ind + displayCount}
                              className="sbic sb33"
                            >
                              <div
                                key={'sb33bb' + ind + displayCount}
                                className="suggestionText"
                              >
                                {suggestion.text}
                              </div>
                            </div>
                          </li>
                        );
                      case 'hist':
                        iconClass = iconHistory;
                        return (
                          <li
                            key={suggestion.guid + displayCount}
                            className="suggestionItem  suggestionActive"
                            onClick={(e) => {
                              selectedInputHandler(e, suggestion.guid);
                            }}
                          >
                            <div
                              key={'sbicA' + ind + displayCount}
                              className={`sbic ${iconClass}`}
                            >
                              <div
                                key={'sbicB' + ind + displayCount}
                                className="suggestionText"
                              >
                                {suggestion.text}
                              </div>
                            </div>
                            <div
                              key={'sbicC' + ind + displayCount}
                              className="suggestionRemove"
                              onClick={(e) =>
                                removeFromHistoryHandler(e, suggestion.guid)
                              }
                            >
                              <a key={'sbicD' + ind + displayCount} href="#">
                                Remove
                              </a>
                            </div>
                          </li>
                        );
                      case 'search':
                        return (
                          <li
                            key={suggestion.guid + displayCount}
                            className="suggestionItem  suggestionActive"
                            onClick={(e) => {
                              selectedInputHandler(e, suggestion.guid);
                            }}
                          >
                            <div
                              key={iconClass + 'A' + ind + displayCount}
                              className={`sbic ${iconClass}`}
                            >
                              <div
                                key={iconClass + 'B' + ind + displayCount}
                                className="suggestionText"
                              >
                                {suggestion.text}
                              </div>
                            </div>
                          </li>
                        );
                      default:
                        return <div key={'dummy' + suggestion.guid}></div>;
                    }
                  })}
                </ul>
                <div className="margin_suggestion_bottom">
                  <input
                    key={'searchButton1'}
                    type="button"
                    className="s-btn"
                    value="Google Search"
                    onClick={(e) => {
                      performSearch();
                    }}
                  />
                  <FeelLucky key={'luckyButton1'} />
                </div>
              </div>
            )}
          </div>

          <input
            key={'searchButton2'}
            type="button"
            className="s-btn"
            value="Google Search"
            onClick={(e) => {
              performSearch();
            }}
          />
          <FeelLucky key={'luckyButton2'} />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
