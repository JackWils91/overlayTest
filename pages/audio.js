import Link from "next/link";

const audio = (props) => {
  // function speaker() {
  //   if ("speechSynthesis" in window) {
  //     speechSynthesis.onvoiceschanged = (function changeVoice() {
  //       var voicelist = "#voices";

  //       if (voicelist.find("option").length == 0) {
  //         speechSynthesis.getVoices().forEach(function (voice, index) {
  //           var option = "<option>"
  //             .val(index)
  //             .html(voice.name + (voice.default ? " (default)" : ""));

  //           voicelist.append(option);
  //         });

  //         voicelist.material_select();
  //       }
  //     })("#speak").click(function () {
  //       var text = "#message".val();
  //       var msg = new SpeechSynthesisUtterance();
  //       var voices = window.speechSynthesis.getVoices();
  //       msg.voice = voices["#voices".val()];
  //       msg.rate = "#rate".val() / 10;
  //       msg.pitch = "#pitch".val();
  //       msg.text = text;

  //       msg.onend = function (e) {
  //         console.log("Finished in " + event.elapsedTime + " seconds.");
  //       };

  //       speechSynthesis.speak(msg);
  //     });
  //   } else {
  //     "#modal1".openModal();
  //   }
  // }

  // const arrayOfPeople = () => {
  //   // if ("speechSynthesis" in window) {

  //   // }
  //   const voices = window.speechSynthesis.getVoices();
  // };

  if (typeof window !== "undefined") {
    if ("speechSynthesis" in window) {
      console.log("gets in");
      speechSynthesis.speak(new SpeechSynthesisUtterance("Kylee is a muppet"));

      var synthesis = window.speechSynthesis;

      // Regex to match all English language tags e.g en, en-US, en-GB
      var langRegex = /^en(-[a-z]{2})?$/i;

      // Get the available voices and filter the list to only have English speakers
      var voices = synthesis
        .getVoices()
        .filter((voice) => langRegex.test(voice.lang));

      console.log(synthesis);
      // Log the properties of the voices in the list
      voices.forEach(function (voice) {
        console.log({
          name: voice.name,
          lang: voice.lang,
          uri: voice.voiceURI,
          local: voice.localService,
          default: voice.default,
        });
      });
    } else {
      console.log("Text-to-speech not supported.");
    }
  }

  return (
    <div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <p>
        This page is static because it does not fetch any data or include the
        authed user info.
      </p>
      {/* <div class="container">
        <div class="row">
          <nav>
            <div class="nav-wrapper">
              <div class="col s12">
                <a href="#" class="brand-logo">
                  Text to speech example
                </a>
              </div>
            </div>
          </nav>
        </div>
        <form class="col s8 offset-s2">
          <div class="row">
            <label>Choose voice</label>
            <select>{}</select>
          </div>
          <div class="row">
            <div class="col s6">
              <label>Rate</label>
              <p class="range-field">
                <input type="range" id="rate" min="1" max="100" value="10" />
              </p>
            </div>
            <div class="col s6">
              <label>Pitch</label>
              <p class="range-field">
                <input type="range" id="pitch" min="0" max="2" value="1" />
              </p>
            </div>
            <div class="col s12">
              <p>N.B. Rate and Pitch only work with native voice.</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="message" class="materialize-textarea"></textarea>
              <label>Write message</label>
            </div>
          </div>
          <a href="#" id="speak" class="waves-effect waves-light btn">
            Speak
          </a>
        </form>
      </div>

      <div id="modal1" class="modal">
        <h4>Speech Synthesis not supported</h4>
        <p>Your browser does not support speech synthesis.</p>
        <p>We recommend you use Google Chrome.</p>
        <div class="action-bar">
          <a
            href="#"
            class="waves-effect waves-green btn-flat modal-action modal-close"
          >
            Close
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default audio;
