import React from 'react';
import { Link } from 'react-router';
import styles from '../stylesheets/containers/footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.container}>
        <h2 id="performances">The Performances</h2>
        <section>
          <h3>John and the Mushrooms</h3>
          <ul>
            <li><Link to="/performances/john-and-the-mushrooms/performance-37">Performance #37</Link> (Video 15:23)</li>
            <li><Link to="/performances/john-and-the-mushrooms/performance-50">Performance #50</Link> (Video 22:01)</li>
            <li><Link to="/performances/john-and-the-mushrooms/performance-51">Performance #51</Link> (Video 19:43)</li>
            <li><Link to="/performances/john-and-the-mushrooms/performance-59">Performance #59</Link> (Video 12:53)</li>
          </ul>
          <h4>Credits and Production Information</h4>
          <p><strong>Script and concept:</strong> Johan Petri <strong>Music by:</strong> John Cage, Erik Satie, <strong>The ensemble Actors:</strong> Staffan Göthe, Jessica Liedberg, Mauritz Elvingsson <strong>Musicians/actors:</strong> Kristine Scholz–keyboards, Eva Lindal–violin, Anna Lindal–violin <strong>Set and costume design:</strong> Daniel Åkerström-Steen <strong>Choreographer:</strong> Nathalie Ruiz <strong>Dramaturge:</strong> Tora von Platen <strong>Lighting design:</strong> check! <strong>Pedagogue:</strong> Ebba Theorell <strong>Photographer:</strong> check! Film photographer: Dan Lepp Producer: Felicia Moritz Malmcrona Direction: Johan Petri <strong>Produced by</strong> Royal Dramatic Theatre, Stockholm, Sweden, 2010/11</p>
        </section>
        <section>
          <h3>vorschläge</h3>
          <ul>
            <li><Link to="/performances/vorschlage/cicadas">cicadas</Link> (Audio 05:23)</li>
            <li><Link to="/performances/vorschlage/independent-variables">independent variables</Link> (Audio 10:12)</li>
            <li><Link to="/performances/vorschlage/empathy">empathy</Link> (Audio 12:57)</li>
            <li><Link to="/performances/vorschlage/birds">birds</Link> (Audio 14:43)</li>
          </ul>
          <h4>Credits and Production Information</h4>
          <p><strong>Composer:</strong> Mathias Spahlinger <strong>Musicians:</strong> Anna Lindal – violin, Eva Lindal – violin, Torbjörn Helander – viola, Åsa Åkerberg – cello, David Stackenäs – guitar, Torbjörn Svedberg – percussion <strong>Recording engineer:</strong> Niklas Billström <strong>Photography:</strong> Gunnar Nehls <strong>Producer:</strong> Tensta Art Center <strong>Concept, direction and editing:</strong> Johan Petri <strong>Produced by</strong> Alice Collective for Sound &amp; Stage Art, 2009</p>
        </section>
        <section>
          <h3>Ryoanji – A Meeting</h3>
          <ul>
            <li><Link to="/performances/ryoanji-a-meeting/performance-3">Performance #3</Link> (Video 12:11)</li>
            <li><Link to="/performances/ryoanji-a-meeting/performance-5">Performance #5</Link> (Video 07:23)</li>
            <li><Link to="/performances/ryoanji-a-meeting/performance-6">Performance #6</Link> (Video 09:47)</li>
            <li><Link to="/performances/ryoanji-a-meeting/performance-7">Performance #7</Link> (Video 11:00)</li>
          </ul>
          <h4>Credits and Production Information</h4>
          <p><strong>Composer:</strong> John Cage <strong>Dancers:</strong> Anna Pehrsson, Love Källman, Pontus Pettersson, Tove Brunberg <strong>Musicians:</strong> Ivo Nilsson – trombone, Jonny Axelsson – percussion <strong>Set design:</strong> Alice Collective for Sound&amp;Stage Art <strong>Lighting Design:</strong> Jenny André <strong>Sound Design:</strong> Niklas Billström <strong>Costume Design:</strong> Filippa Hansson <strong>Mask Design:</strong> Susanne von Platen <strong>Dramaturge:</strong> Tora von Platen <strong>Set Construction:</strong> Anders L Lindholm Film <strong>Photography:</strong> Dan Lepp <strong>Producer:</strong> Suzi Ersahin <strong>Concept and direction:</strong> Johan Petri <strong>Produced by</strong> Alice Collective for Sound&amp;Stage Art, 2012</p>
        </section>
      </footer>
      );
  }
}
