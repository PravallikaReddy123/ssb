import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import orgChartImage from '../../assets/image.png';

export default function OrganisationChart() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Organisation Chart"
            subtitle="Institutional organizational structure"
            description="Visual overview of the governance and reporting structure at Sanskrithi School of Business"
          />

          <div className="space-y-section">
            {/* Intro panel */}
            <div className="panel">
              <h2>Institutional Structure</h2>
              <p className="text-[var(--text-soft)] mb-4">
                The organisation chart illustrates the governing bodies, academic leadership, administrative
                units, and functional committees that work together to deliver quality education and student support.
              </p>
              <p className="text-[var(--text-muted)] text-sm">
                Tap the image to open it full-screen in a new tab for detailed viewing.
              </p>
            </div>

            {/* Chart image */}
            <div className="panel">
              <h2>Organisation Chart</h2>

              <div className="mb-4 flex flex-wrap gap-3 items-center justify-between">
                <p className="text-[var(--text-soft)] text-sm">
                  Best viewed in landscape mode on mobile devices.
                </p>
                <a
                  href={orgChartImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] transition-colors"
                >
                  <span>Open full image</span>
                </a>
              </div>

              <button
                type="button"
                className="w-full rounded-2xl border border-[var(--border-light)] bg-[var(--surface-0)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                onClick={() => {
                  window.open(orgChartImage, '_blank', 'noopener,noreferrer');
                }}
              >
                <img
                  src={orgChartImage}
                  alt="Sanskrithi School of Business Organisation Chart"
                  className="w-full h-auto max-h-[70vh] object-contain bg-[var(--surface-1)]"
                  loading="lazy"
                />
              </button>

              <p className="mt-3 text-[var(--text-muted)] text-xs">
                Use pinch-to-zoom or your browser&apos;s zoom controls to inspect finer details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}