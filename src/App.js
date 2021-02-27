import { useState } from "react";
import "./styles.css";

export default function App() {
  var crossfitList = {
    exercise1: "Jump Squat",
    value1:
      "Stand with feet hip-width distance apart, feet slightly turned out. 2. Perform a normal bodyweight squat, maintaining a tall spine and braced core. ... As soon as your hip sinks just below the knees, push your heels the floor by jumping as high as you can, and land softly on your feet",
    exercise2: "Pull Ups",
    value2:
      "A pullup is an upper body strength training exercise. To perform a pullup, you start by hanging onto a pullup bar with your palms facing away from you and your body extended fully. You then pull yourself up until your chin is above the bar. Pullups are different than a chinup.",
    exercise3: "Push Ups",
    value3:
      "Traditional pushups are beneficial for building upper body strength. They work the triceps, pectoral muscles, and shoulders. When done with proper form, they can also strengthen the lower back and core by engaging (pulling in) the abdominal muscles. Pushups are a fast and effective exercise for building strength."
  };

  var danceList = {
    exercise1: "Zumba",
    value1:
      "You may be able to burn between 300 and 900 calories during one hour of mid- to high-intensity Zumba. Doing Zumba two or three times a week, combined with weekly strength training sessions and a balanced diet, may help you meet your weight loss goals.",
    exercise2: "Aerobics",
    value2:
      "Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness).",
    exercise3: "Animal flow",
    value3:
      "Animal Flow is a ground-based movement program that's designed to improve the function and communication of the 'Human Animal."
  };

  var resistanceList = {
    exercise1: "Bench Press",
    value1:
      "Lie on your back on a flat bench. Grip a barbell with hands slightly wider than shoulder-width. ... Stop lowering when elbows are just below the bench. Press feet into the floor as you push the bar back up to return to starting position. Perform 5-10 reps, depending on weight used.",
    exercise2: "Leg Press",
    value2:
      "The leg press machine promotes lower body development, targeting the major lower body muscles like the quadriceps, hamstrings, gluteal muscles, and calves. The leg press machine isolates the lower body from the upper body during the exercise.",
    exercise3: "DeadLift",
    value3:
      "Deadlifting can increase core strength, core stability and improve your posture. Deadlifting trains most of the muscles in the legs, lower back and core. These are all muscles responsible for posture, which will help keep your shoulders, spine, and hips in alignment."
  };

  var defaultList = {
    exercise1: "Please Click button"
  };
  const [input, setinputValue] = useState(defaultList.exercise1);

  function getList(event) {
    var inButton = event.target.id;
    switch (inButton) {
      case "crossfit":
        setinputValue(crossfitList);
        break;
      case "resistance":
        setinputValue(resistanceList);
        break;
      case "dance":
        setinputValue(danceList);
        break;
      default:
        setinputValue(defaultList);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="exerciseEmoji">
            {" "}
            🏋️{" "}
          </span>
          Exercise
        </h1>
        <h3>Choose any of the exercise from below</h3>
      </header>

      <div class="ButtonContainer">
        <button id="crossfit" onClick={getList}>
          CrossFit
        </button>
        <button id="resistance" onClick={getList}>
          Resistance Training
        </button>
        <button id="dance" onClick={getList}>
          Dance Fitness
        </button>
      </div>
      <hr class="LineSeperator"></hr>

      <section>
        <ul>
          <li
            style={{
              margin: ".5rem",
              padding: "1rem",
              listStyle: "none",
              borderColor: "black",
              borderStyle: "solid",
              borderRadius: ".5rem"
            }}
          >
            <div>
              <h5>{input.exercise1}</h5>
              <small>{input.value1}</small>
            </div>
          </li>
          <li
            style={{
              margin: ".5rem",
              padding: "1rem",
              listStyle: "none",
              borderColor: "black",
              borderStyle: "solid",
              borderRadius: ".5rem"
            }}
          >
            <div>
              <h5>{input.exercise2}</h5>
              <small>{input.value2}</small>
            </div>
          </li>
          <li
            style={{
              margin: ".5rem",
              padding: "1rem",
              listStyle: "none",
              borderColor: "black",
              borderStyle: "solid",
              borderRadius: ".5rem"
            }}
          >
            <div>
              <h5>{input.exercise3}</h5>
              <small>{input.value3}</small>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
