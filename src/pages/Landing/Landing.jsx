import "./Landing.css";
import NetBackground from "../../components/NetBackground/NetBackground";
// import img from '../../assets/image_background_for_url_shortner.jpg'
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Landing = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const [isInputActive, setIsInputActive] = useState(false);
  const [urlExpiredIn, setUrlExpiredIn] = useState("30 min");
  const [noOfUrl, setNoOfUrl] = useState("1");
  const [shortUrlOutput, setShortUrlOutput] = useState("");




  // performing the copy text of short url output
  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shortUrlOutput)
        .then(() => {
          alert("Text copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = shortUrlOutput;
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Fallback: Failed to copy text: ", err);
      }
      document.body.removeChild(textarea);
    }
  };
  
  // validate user url input 
  useEffect(() => {
    if (isInputActive && inputValue.length > 0) {
      if (inputValue.length < 7) {
        setIsValidInput(false);
      } else if (
        !(inputValue.includes("https://") || inputValue.includes("http://"))
      ) {
        setIsValidInput(false);
      } else if (inputValue.includes("vishalkumar07.me")) {
        setIsValidInput(false);
      } else if (
        !(
          inputValue[0] === "h" &&
          inputValue[1] === "t" &&
          inputValue[2] === "t" &&
          inputValue[3] === "p"
        )
      ) {
        setIsValidInput(false);
      } else if (!inputValue.includes(".")) {
        setIsValidInput(false);
      } else {
        setIsValidInput(true);
      }
    } else {
      if (inputValue.length === 0) {
        setIsValidInput(true);
      }
    }
  }, [inputValue, isInputActive]);

  return (
    <div className="Landing_screen_main_pvr">
      <div className="landing_behind_screen">
        <NetBackground />
      </div>
      <div className="Landing_main">
        <div className="Landing_main_section_1">
          <Navbar />
        </div>
        <div className="Landing_main_section_3">
          <p id="Landing_main_section_3_head">Short Your ULR</p>
          <p id="Landing_main_section_3_para">
            any length of url you can make it small
          </p>
        </div>
        <div className="Landing_main_section_2">
          <div className="Landing_main_section_2_effect_color">
            <div className="Landing_main_section_2_effect_color_1"></div>
            <div className="Landing_main_section_2_effect_color_2"></div>
            <div className="Landing_main_section_2_effect_color_3"></div>
            <div className="Landing_main_section_2_effect_color_4"></div>
          </div>
          <div className="Landing_main_section_2_layout">
            <div className="Landing_main_section_2_layout_top">
              <input
                style={{
                  boxShadow: isValidInput
                    ? "0px 0px 10px #1d192c7a"
                    : "0px 0px 10px #ff00007a",
                }}
                type="text"
                id="url_input_short"
                placeholder="Enter or paste your url to make it short"
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsInputActive(true)}
                onBlur={() => setIsInputActive(false)}
              />
              <button id="url_short_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9f9f9f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </button>
            </div>
            <div className="Landing_main_section_2_layout_bottom">
              <div className="Landing_main_section_2_layout_bottom_left">
                <div className="Landing_main_section_2_layout_bottom_left_conf_action">
                  <div className="Landing_main_section_2_layout_bottom_left_conf_action_link_expire">
                    <p>new url expired in </p>
                    <span>
                      <select
                        id="expiry_url"
                        onChange={(e) => setUrlExpiredIn(e.target.value)}
                      >
                        <option value="30 min">30 min</option>
                        <option value="1 hour">1 hour</option>
                        <option value="12 hour">12 hour</option>
                        <option value="1 day">1 day</option>
                        <option value="30 days">30 days</option>
                      </select>
                    </span>
                  </div>

                  <div className="Landing_main_section_2_layout_bottom_left_conf_action_url_number_of_url">
                    <p>no of unique url</p>
                    <span>
                      <select
                        id="url_number_of_time"
                        onChange={(e) => setNoOfUrl(e.target.value)}
                      >
                        <option value="1">1 url</option>
                        <option value="2">2 url</option>
                        <option value="3">3 url</option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              <div className="Landing_main_section_2_layout_bottom_right">
                <div className="Landing_main_section_2_layout_bottom_right_output_value">
                  {shortUrlOutput.length === 0 ? (
                    <p id="output_alert_LMS">Give url to get shorter url</p>
                  ) : (
                    <div id="Landing_main_section_2_layout_bottom_right_output_value_url_div">
                      <p id="op_url_server">{shortUrlOutput}</p>
                      <button
                        className="copy_output_url_icon_box"
                        onClick={() => copyToClipboard()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-copy"
                        >
                          <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                          />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;