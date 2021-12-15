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
      value ? setSource(`&utm_source=${value}`) : setSource("");
    if (id === "medium")
      value ? setMedium(`&utm_medium=${value}`) : setMedium("");
    if (id === "campaign")
      value ? setCampaign(`${value}`) : setCampaign("");
    if (id === "term") 
      value ? setTerm(`&utm_term=${value}`) : setTerm("");
    if (id === "anchor")
      value ? setContent(`&utm_content=${value}`) : setContent("");
    if (id === "anchor")
      value ? setAnchor(`&#/planner?vpc=${value}`) : setAnchor("");
    
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
                  Planner <span className="mandatory-star">*</span>
                </label>
              </div>
              <div className="col-5">
                <input list="domain1" id="domain" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="domain1">
                  <option value="https://www.ikea.com/addon-app/storageone/pax/web/latest/?range=pax&uiPlatform=web&locale=de-AT">Pax Planner</option>
                  <option value="2">New Planner</option>
                  <option value="3">Old Planner</option>
                </datalist>
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (Select the Planner)
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
                <input list="camp1" id="campaign" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="camp1">
                  <option value="&utm_campaign=at_supportingcx_servicecommunication_0_fy22_digitalplanners&utm_source=instore&utm_medium=qrcode
">Service Communication - Planner QR Code</option>
                </datalist>
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (Select the Service Communication Type)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="term" className="col-form-label">
                  Store
                </label>
              </div>
              <div className="col-5">
                <input list="terms1" id="term" className="form-control" aria-describedby="passwordHelpInline" onChange={handleChange} />
                <datalist id="terms1">
                  <option value="085">Vösendorf</option>
                  <option value="090">Wien Nord</option>
                </datalist>
              </div>
              <div className="col-4">
                <span id="passwordHelpInline" className="form-text">
                  (Select the Store or leave empty if the link applies to all Stores)
                </span>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <div className="col-3">
                <label htmlFor="anchor" className="col-form-label">
                  Planner Code <span className="mandatory-star">*</span>
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
                  (e.g.: CVQ9Y4)
                </span>
              </div>
            </div>
          </form>
          <div className="row mb-3 align-items-center mt-4 text-center">
              <h3 className="mb-4">Final URL</h3>
              <p className='small'>Copy the URL or the QR-Code below.</p>
             
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