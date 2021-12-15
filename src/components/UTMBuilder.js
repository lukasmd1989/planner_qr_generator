import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
//import { FaSave } from "react-icons/fa";

export const UTMBuilder = () => {
  const [utmlink, setUtmlink] = useState("");
  const [copied, setCopied] = useState(false);
  const [domain, setDomain] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [anchor, setAnchor] = useState("");
  const [qr, setQR] = useState("");

  useEffect(() => {
    if (domain)
      setUtmlink(domain + source + medium + campaign + term + content + anchor);
    else setUtmlink("https://www.ikea.com/at/de");
  }, [domain, source, medium, campaign, term, content, anchor]);
  useEffect(() => {
    if (domain)
      setQR("https://ikea-at-adminhub-prod.ew.r.appspot.com/api/code/qr?content=" + domain + source + medium + campaign + term + content + anchor);
    else setQR("https://www.ikea.com/at/de");
  }, [domain, source, medium, campaign, term, content, anchor]);

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id === "domain") 
      value ? setDomain(`${value}`) : setDomain(``);
    if (id === "source")
      value ? setSource(`?utm_source=${value}`) : setSource("");
    if (id === "medium")
      value ? setMedium(`&utm_medium=${value}`) : setMedium("");
    if (id === "campaign")
      value ? setCampaign(`&utm_campaign=${value}`) : setCampaign("");
    if (id === "term") 
      value ? setTerm(`&utm_term=${value}`) : setTerm("");
    if (id === "content")
      value ? setContent(`&utm_content=${value}`) : setContent("");
    if (id === "anchor")
      value ? setAnchor(`&#${value}`) : setAnchor("");
    
      setCopied(false);
  };

  return (
    <section className="container">
      <div className="row justify-content-md-center">
        <div className="col-10">
          <form>
            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="domain" className="col-form-label">
                  Website URL <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="domain"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (https://www.example.com)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="source" className="col-form-label">
                  UTM Source <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input list="source1" id="source" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="source1">
                  <option value="facebook"/>
                  <option value="twitter"/>
                  <option value="google"/>
                  <option value="linkedin"/>
                  <option value="instagram"/>
                  <option value="yandex"/>
                  <option value="bing"/>
                  <option value="baidu"/>
                  <option value="yahoo"/>
                  <option value="naver"/>
                  <option value="weixin bridge"/>
                  <option value="youtube"/>
                  <option value="pinterest"/>
                  <option value="newsletter"/>
                  <option value="shortlink"/>
                  <option value="catalogue"/>
                  <option value="spotify"/>
                  <option value="prosieben"/>
                  <option value="wifi"/>
                  <option value="instore"/>
                  <option value="store85"/>
                  <option value="store90"/>
                  <option value="store155"/>
                  <option value="store273"/>
                  <option value="store386"/>
                  <option value="store387"/>
                  <option value="store388"/>
                  <option value="store587"/>
                  <option value="kleinezeitung"/>
                </datalist>
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (google, newsletter, social)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="medium" className="col-form-label">
                  UTM Medium <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input list="medium1" id="medium" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="medium1">
                  <option value="paid search"/>
                  <option value="display"/>
                  <option value="email"/>
                  <option value="referral"/>
                  <option value="social"/>
                  <option value="affiliate"/>
                  <option value="video"/>
                  <option value="sms"/>
                  <option value="app"/>
                  <option value="qrcode"/>
                  <option value="sitelink"/>
                  <option value="ooh"/>
                  <option value="print"/>
                  <option value="tv"/>
                </datalist>
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (cpc, banner, email, campaign, ad)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="campaign" className="col-form-label">
                  Campaign Name <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="campaign"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (Use Campaign Name Generetor)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="term" className="col-form-label">
                  Campaign Term
                </label>
              </div>
              <div className="col-5">
                <input list="terms1" id="term" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="terms1">
                  <option value="Blau"/>
                  <option value="Rot"/>
                  <option value="Gruen"/>
                </datalist>
              </div>
              <div className="col-4"></div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="content" className="col-form-label">
                  Campaign Content
                </label>
              </div>
              <div className="col-5">
                <input list="content1" id="content" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="content1">
                  <option value="1"/>
                  <option value="2"/>
                  <option value="3"/>
                </datalist>
              </div>
              <div className="col-4"></div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="anchor" className="col-form-label">
                  Anchor
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  id="anchor"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={handleChange}
                />
              </div>
               <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (without #)
                </span>
              </div>
            </div>
          </form>
          <div className="row mb-3 align-items-center mt-4 text-center">
              <h3 className="mb-4">Generated UTM campaign URL</h3>
              <p className='small'>Share the below url in social media, ad campaign, and view the traffic in Google Analytics.</p>
             
            <textarea className="form-control" defaultValue={utmlink} />

          </div>
           <div className="row mb-3 align-items-center mt-4 text-center">
            <img id="qr-code" src={qr} width="300" height="300" />
           </div>
        </div>
      </div>
      <hr />
    </section>
  );
};