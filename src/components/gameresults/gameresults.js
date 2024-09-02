import React from 'react';
import './gameresults.css';

function GameResults() {
  return (
    <section className="sectionWhite">
      <a id="results" class="anchor"></a>
        <div class="small-line"></div>
        <div class="sectionheading">GAME RESULTS</div>
        <div class="results-head">
            Longest sliding distance wins
        </div>
        <div class="results">
            <span class="result1">
                <span class="date">Date: 11 May 2024</span><br />
                Melbourne Sock Surfers: 3.8m<br />
                Sydney Slip Sliders: 3.2m
            </span>
            <span class="result2">
                <span class="date">Date: 8 Jun 2024</span><br />
                Melbourne Sock Surfers: 4.1m<br />
                Brisbane Glide Riders: 4.0m
            </span>
            <span class="result1">
                <span class="date">Date: 13 Jul 2024</span><br />
                Melbourne Sock Surfers: 3.5m<br />
                Perth Polished Pushers: 3.7m
            </span>
            <span class="result2">
                <span class="date">Date: 10 Aug 2024</span><br />
                Melbourne Sock Surfers: 4.4m<br />
                Newcastle Nifty Nomads: 4.2m
            </span>
        </div>
    </section>
  );
}

export default GameResults;
