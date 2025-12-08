'use client';

import { useState } from 'react';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card' | 'minimal';
  title?: string;
  description?: string;
  className?: string;
}

export default function NewsletterSignup({
  variant = 'card',
  title = 'Stay Updated with Engineering Insights',
  description = 'Get the latest articles on aluminum framing, technical guides, and industry insights delivered to your inbox.',
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setMessage('Thanks for subscribing! We\'ll send you our latest insights.');
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
            disabled={status === 'loading' || status === 'success'}
          />
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            size="sm"
          >
            {status === 'loading' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
        {message && (
          <p className={`text-sm mt-2 ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-xl p-8 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-[#0A1628]" />
          </div>
          <div className="flex-1">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {description}
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                disabled={status === 'loading' || status === 'success'}
              />
              <Button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
            {message && (
              <p className={`text-sm mt-2 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default: card variant
  return (
    <div className={`bg-white border-2 border-gray-200 rounded-xl p-8 ${className}`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-[#C9A227] rounded-2xl flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
          {title}
        </h3>
        <p className="text-[#6B7C93] mb-6 max-w-md">
          {description}
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
              disabled={status === 'loading' || status === 'success'}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
          {message && (
            <p className={`text-sm mt-3 ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </form>
        <p className="text-xs text-[#6B7C93] mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
