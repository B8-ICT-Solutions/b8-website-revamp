/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState('+95');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    reason: '',
    details: '',
  });

  const countryCodes = [
    { code: '+95', name: 'Myanmar' },
    { code: '+971', name: 'United Arab Emirates (Dubai)' },
    { code: '+66', name: 'Thailand' },
    { code: '+65', name: 'Singapore' },
    { code: '+886', name: 'Taiwan' },
    { code: '+62', name: 'Indonesia' },
    { code: '+63', name: 'Philippines' },
    { code: '+84', name: 'Vietnam' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceID,
        templateID,
        {
          to_email: 'thuranyi64@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          phone: `${countryCode} ${formData.phone}`,
          reason: formData.reason,
          details: formData.details,
        },
        publicKey
      );

      alert('✅ Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        reason: '',
        details: '',
      });
    } catch (error) {
      console.error('❌ Email send failed:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSendEmail} className='flex flex-col gap-[10px]  w-full xl:max-w-[412px]'>
      {/* Name fields */}
      <div className='flex gap-[10px] font-medium'>
        <input
          className='w-[50%] border-[0.5px] border-white/70 h-[45px] px-[10px] font-inter text-white placeholder:text-white placeholder:font-medium bg-transparent'
          placeholder='First name'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className='w-[50%] border-[0.5px] border-white/70 h-[45px] px-[10px] font-inter text-white placeholder:text-white placeholder:font-medium bg-transparent'
          placeholder='Last name'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone with dropdown */}
      <div className='flex relative'>
        <div
          className='h-[45px] border-[0.5px] border-white/70 w-[85px] flex items-center justify-between px-2 cursor-pointer font-medium relative bg-transparent'
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>{countryCode}</span>
          <Image
            src='/chevron.svg'
            alt='dropdown'
            width={16}
            height={16}
            className={`transition-transform ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
          />
          {dropdownOpen && (
            <div className='absolute top-[46px] left-0 bg-[#1a1a1a] border-[0.5px] border-white/70 w-full z-10 text-[12px]'>
              {countryCodes.map((country) => (
                <div
                  key={country.code}
                  className='px-3 py-1 hover:bg-[#333] cursor-pointer'
                  onClick={() => {
                    setCountryCode(country.code);
                    setDropdownOpen(false);
                  }}
                >
                  {country.code}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          className='h-[45px] w-full border-[0.5px] border-white/70 px-[10px] font-inter text-white bg-transparent placeholder:text-white'
          placeholder='Phone number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Reason and details */}
      <input
        className='w-full border-[0.5px] border-white/70 h-[45px] px-[10px] font-inter text-white placeholder:text-white placeholder:font-medium bg-transparent'
        placeholder='Reason'
        name='reason'
        value={formData.reason}
        onChange={handleChange}
        required
      />
      <input
        className='w-full border-[0.5px] border-white/70 h-[45px] px-[10px] font-inter text-white placeholder:text-white placeholder:font-medium bg-transparent'
        placeholder='Details'
        name='details'
        value={formData.details}
        onChange={handleChange}
        required
      />

      {/* Submit button */}
      <button
        type='submit'
        className='w-full border-[0.5px] border-white/70 h-[45px] flex justify-between items-center pl-[10px] text-white font-medium'
      >
        Send message
        <div className='w-[44px] h-[42px] border-[0.5px] border-white/70 bg-[#6817E5] flex items-center justify-center'>
          <Image
            src='/rightArrow.svg'
            alt='send'
            priority
            width={16}
            height={16}
          />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
