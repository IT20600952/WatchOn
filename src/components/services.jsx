import React from "react";

export const Services = (props) => {
  const getDocumentLink = (name) => {
    switch (name) {
      case "Project Charter":
        return "";
      case "Project Proposal":
        return "https://drive.google.com/file/d/1YkpHI-WstWx2Ng7eUcU_2ONEt3NswVmN/view?usp=sharing";
      case "Research Paper":
        return "https://drive.google.com/file/d/1m6o8XkiaapwXNZtpbtunr6g3ZpcpH4-x/view?usp=sharing";
      case "Final Thesis":
        return "https://drive.google.com/file/d/108jaGLupJ_aSY_SE4Sm4wyRvCVZkW3gA/view?usp=sharing";
      case "Status Document":
        return "https://drive.google.com/file/d/1drop8O2oHkkj-Jih5j6vDoQwl10xHnOb/view?usp=sharing";
      case "Research logbook":
        return "";
      case "Proposal Presentation":
        return "https://docs.google.com/presentation/d/1avH49rCQ9jxoKHF7FPHvmCKUM6i7qwtG/edit?usp=sharing&ouid=116761855813044501508&rtpof=true&sd=true";
      case "Progress Presentation I":
        return "https://drive.google.com/file/d/1272GvNOsseYcIkwEuSTiLEbidRdzEmMe/view?usp=sharing";
      case "Progress Presentation II":
        return "";
      default:
        return "#";
    }
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Documents</h2>
          <p>Project Documents & Project Presentations</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                <div className="card service-card">
                  <div className="card-body">
                    <i className={d.icon}></i>
                    <h3 className="card-title">{d.name}</h3>
                    <p className="card-text">{d.text}</p>
                    {/* Add View Document button */}
                    <a
                      href={getDocumentLink(d.name)}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          margin: 20px 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff;
          height: 400px; 
          display: flex;
          justify-content: center; 
          align-items: center; 
          text-align: center; 
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        }

        .service-card .card-body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .service-card i {
          font-size: 40px;
          margin-bottom: 15px;
          color: #f39c12; 
        }

        .service-card .card-title {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
        }

        .service-card .card-text {
          font-size: 16px;
          color: #777;
        }

        .btn {
          margin-top: 15px;
          background-color: #f39c12;
          color: #fff;
        }

        .btn:hover {
          background-color: #e67e22;
          color: #fff;
        }
      `}</style>
    </div>
  );
};
