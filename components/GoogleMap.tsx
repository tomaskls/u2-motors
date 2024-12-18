'use client';
import React from "react";
const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.726998071657!2d23.275164!3d55.917445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e3a7ff48f73d%3A0x2c371c5c1d5829dc!2sSerbentu%20g.%2055%2C%20Siauliai%2077124!5e0!3m2!1sen!2slt!4v1703786458965!5m2!1sen!2slt"
      className="w-full aspect-square"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default GoogleMap;