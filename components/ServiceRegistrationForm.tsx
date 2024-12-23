'use client';
import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";

const WEB3FORMS_KEY = '9cdfe2c8-8677-4c0c-aded-2510ae6d7d40';

const DEFAULT_FORM_VALUES = {
  name: '',
  phone: '',
  email: '',
  carMake: '',
  carModel: '',
  carYear: '',
  preferredDate: '',
  preferredTime: '',
  description: ''
};

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00"
];

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 }, 
  (_, index) => (currentYear - index).toString()
);

export function ServiceRegistrationForm() {
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formattedMessage = `
Vardas: ${formData.name}
Tel: ${formData.phone}
El. paštas: ${formData.email}

Automobilis: ${formData.carMake} ${formData.carModel} ${formData.carYear}
Data: ${formData.preferredDate}
Laikas: ${formData.preferredTime}

Aprašymas:
${formData.description}
    `;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nauja registracija į autoservisą',
          from_name: formData.name,
          message: formattedMessage,
          email: formData.email,
          phone: formData.phone
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Registracijos klaida');
      }

      setSuccess(true);
      setFormData(DEFAULT_FORM_VALUES);
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Įvyko klaida. Prašome bandyti vėliau.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-4 bg-green-100 dark:bg-green-800 rounded-lg">
        <p className="text-green-700 dark:text-green-100">
          Registracija sėkminga! Netrukus su Jumis susisieksime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Vardas"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          isRequired
        />
        
        <Input
          label="Telefono numeris"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          isRequired
        />

        <Input
          label="El. paštas"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          isRequired
        />

        <Input
          label="Automobilio markė"
          name="carMake"
          value={formData.carMake}
          onChange={handleChange}
          required
          isRequired
        />

        <Input
          label="Automobilio modelis"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
        />

        <Select
          label="Pagaminimo metai"
          name="carYear"
          value={formData.carYear}
          onChange={(e) => handleSelectChange('carYear', e.target.value)}
        >
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </Select>

        <Input
          label="Pageidaujama data"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleChange}
          required
          isRequired
          min={new Date().toISOString().split('T')[0]}
        />

        <Select
          label="Pageidaujamas laikas"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={(e) => handleSelectChange('preferredTime', e.target.value)}
          required
          isRequired
        >
          {timeSlots.map((time) => (
            <SelectItem key={time} value={time}>
              {time}
            </SelectItem>
          ))}
        </Select>
      </div>

      <Textarea
        label="Gedimo/remonto aprašymas"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
        isRequired
        minRows={3}
      />

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-800 rounded-lg">
          <p className="text-red-700 dark:text-red-100">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        color="primary"
        isLoading={loading}
        className="w-full"
      >
        Registruotis
      </Button>
    </form>
  );
}