"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import type { Chapter } from "@/data/types";

/** Brand-colored teardrop marker built as an inline SVG divIcon. */
function makeIcon(flagship?: boolean) {
  const fill = flagship ? "#25637a" : "#49839b";
  const size = flagship ? 42 : 34;
  const html = `
    <div style="transform: translate(-50%, -100%); filter: drop-shadow(0 4px 6px rgba(37,99,122,0.35));">
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C6.48 0 2 4.48 2 10c0 7 10 14 10 14s10-7 10-14C22 4.48 17.52 0 12 0z" fill="${fill}"/>
        <circle cx="12" cy="10" r="3.6" fill="#ffffff"/>
      </svg>
    </div>`;
  return L.divIcon({
    html,
    className: "sail-marker",
    iconSize: [size, size],
    iconAnchor: [0, 0],
    popupAnchor: [0, -size],
  });
}

/** Fit the map to all chapter markers with a little padding. */
function FitBounds({ chapters }: { chapters: Chapter[] }) {
  const map = useMap();
  useEffect(() => {
    if (!chapters.length) return;
    const bounds = L.latLngBounds(chapters.map((c) => [c.lat, c.lng]));
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 9 });
  }, [chapters, map]);
  return null;
}

export default function ChapterMapInner({
  chapters,
  activeId,
}: {
  chapters: Chapter[];
  activeId?: string | null;
}) {
  return (
    <MapContainer
      center={[40, -83]}
      zoom={7}
      scrollWheelZoom={false}
      zoomControl
      className="h-full w-full"
      style={{ background: "#eef3f5" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FitBounds chapters={chapters} />
      <Recenter chapters={chapters} activeId={activeId} />
      {chapters.map((c) => (
        <Marker
          key={c.id}
          position={[c.lat, c.lng]}
          icon={makeIcon(c.flagship)}
        >
          <Popup>
            <div className="font-body">
              <p className="text-sm font-bold text-[#25637a]">{c.name}</p>
              <p className="text-xs text-[#5c5f61]">{c.location}</p>
              {c.flagship && (
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#49839b]">
                  Founding Chapter
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

/** Pans/zooms to the chapter selected from the chip list. */
function Recenter({
  chapters,
  activeId,
}: {
  chapters: Chapter[];
  activeId?: string | null;
}) {
  const map = useMap();
  useEffect(() => {
    if (!activeId) return;
    const c = chapters.find((x) => x.id === activeId);
    if (c) map.flyTo([c.lat, c.lng], 11, { duration: 1.1 });
  }, [activeId, chapters, map]);
  return null;
}
