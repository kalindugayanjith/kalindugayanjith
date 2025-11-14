"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container py-3 footer-section text-white">
      <div className="row footer-row">
        <div className="col-md-3">
           <div className="text-center">
            <p className="footer-text">
              <i className="fa-regular fa-copyright pe-1"></i> Designed by Kalindu
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <p className="footer-text">
              <i className="fa-regular fa-copyright pe-1"></i> 2025 Kalindu
              Gayanjith.
            </p>
          </div>
        </div>
        <div className="col-md-3 footer-icons mb-4 mb-md-0">
          <div className="footer-icon-wrapper d-flex align-items-center">
            <div className="footer-icon me-4">
              <Link
                href="https://linkedin.com/in/kalindugayanjith"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-linkedin-in fs-4"></i>
              </Link>
            </div>
            <div className="footer-icon">
              <Link
                href="https://github.com/kgayanjith"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-github fs-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
