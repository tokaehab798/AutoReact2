import React, { useCallback, useEffect, useState } from "react";
import "./AdminForm.css";
import { getAllForms } from "../../services/adminForm";
import { saveAs } from "file-saver";
import { PDFDocument, rgb } from "pdf-lib";

function AdminForm() {
  const [allForms, setAllForms] = useState(null);
  const [handlingOption, setHandlingOption] = useState(null);

  const fetchAllForms = useCallback(async () => {
    try {
      const response = await getAllForms();
      setAllForms(response.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllForms();
  }, [fetchAllForms]);

  const handleHandlingOption = (option) => {
    setHandlingOption(option);
  };

  const downloadPDF = async (form) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const { subject, description, userId } = form;

    page.drawText(`Subject: ${subject}`, {
      x: 50,
      y: 800,
      size: 20,
      color: rgb(0, 0, 0),
    });

    // Add content to the PDF
    page.drawText(`Handled By: ${userId?.name}`, {
      x: 50,
      y: 700,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Description: ${description}`, {
      x: 50,
      y: 600,
      size: 20,
      color: rgb(0, 0, 0),
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Convert bytes to a Blob
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Download the Blob as a PDF file
    saveAs(pdfBlob, "example.pdf");
  };

  return (
    <section className="p-5">
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="go-back-container" style={{ marginLeft: "20px" }}>
          <a className="go-back-link" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <div>
          {/* Render allForms */}
          {Array.isArray(allForms) &&
            allForms.map((form, index) => (
              <div
                className="row p-5 bg-light align-items-center forms-row rounded"
                key={index}
              >
                <div className="col-lg-12">
                  <div className="d-flex align-items-center">
                    <p className="fw-bold me-1 mb-0">Name:</p>
                    <p className="mb-0">{form?.userId?.name}</p>
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <p className="fw-bold me-1 mb-0">ID:</p>
                    <p className="mb-0">{form._id}</p>
                  </div>
                  <div className="d-flex align-items-center mt-1">
                    <p className="fw-bold me-1 mb-0">Form:</p>
                    <p className="mb-0">{form.subject}</p>
                  </div>
                  <div className="d-flex mt-1">
                    <p className="fw-bold me-1 mb-0">Handling:</p>
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-success dropdown-toggle"
                        type="button"
                        id={`handlingDropdown${index}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Handle by
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => handleHandlingOption("MySelf")}
                          >
                            Handling by Myself
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={() => handleHandlingOption("Others")}
                          >
                            Handling by Others
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="btn btn-success ms-auto"
                      onClick={() => downloadPDF(form)}
                    >
                      Download
                    </button>
                  </div>
                  {handlingOption === "Others" && (
                    <div className="d-flex mt-1">
                      <p className="fw-bold me-1 mb-0">Send to:</p>
                      <div className="dropdown">
                        <button
                          className="btn btn-success dropdown-toggle"
                          type="button"
                          id={`sendToDropdown${index}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          sent to
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              DR Mohamed El Mahalawy
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              DR Mohanad Deif
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              TA Shimaa Bahaa
                            </a>
                          </li>
                        </ul>
                      </div>
                      <button className="btn btn-success ms-auto">Send</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default AdminForm;
