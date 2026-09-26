import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Globe,
  MessageSquare,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import PageMeta from '@/components/common/PageMeta';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Sanitize inputs to prevent XSS
      const sanitizedValues = {
        name: values.name.trim().replace(/<[^>]*>/g, ''),
        email: values.email.trim().toLowerCase(),
        phone: values.phone.trim().replace(/[^\d+\-() ]/g, ''),
        service: values.service,
        message: values.message.trim().replace(/<[^>]*>/g, '')
      };

      // Simulate API call - Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Log sanitized values (in production, send to backend)
      console.log('Sanitized form data:', sanitizedValues);

      toast.success('Request Received Successfully!', {
        description: "Our team will contact you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      toast.error('Submission Failed', {
        description: "Please try again or contact us directly.",
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: 'Email Us', value: 'contact@primewebtech.online' },
    { icon: <Phone className="w-4 h-4" />, label: 'Call Us', value: '+91 72768 15079' },
    { icon: <MapPin className="w-4 h-4" />, label: 'Visit Us', value: 'Narhe, Pune, Maharashtra 411041' }
  ];

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Prime Web Tech",
      "telephone": "+91 72768 15079",
      "email": "contact@primewebtech.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411041",
        "streetAddress": "Narhe"
      }
    }
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 min-h-screen relative overflow-hidden">
      <PageMeta 
        title="Contact Us | Prime Web Tech - Best IT Company in Pune, India" 
        description="Get in touch with Prime Web Tech for expert web development, AI solutions, and custom software. Contact us today for a free consultation and project quote."
        url="/contact"
        schema={contactPageSchema}
      />

      <div className="container-responsive relative z-10">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="studio-eyebrow mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Direct Line To Excellence</span>
          </div>
          <h1 className="hero-headline text-foreground mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 0.98 }}>
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Ready to start your next project? We're here to help you navigate your digital
            journey and build the technology your business deserves.
          </p>
        </div>

        {/* Split Studio Form & Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <div className="mono-label text-[10px] text-muted-foreground mb-2">STUDIO INQUIRIES</div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase mb-3">Get In Touch</h2>
              <p className="text-muted-foreground text-xs sm:text-sm font-normal leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities,
                our team is ready to provide expert guidance and elite execution.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="studio-card p-5 border border-border rounded-lg bg-surface flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded border border-border bg-surface-subtle flex items-center justify-center text-primary shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <div className="mono-label text-[9px] text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-foreground tracking-tight break-all">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Minimalist Form */}
          <div className="lg:col-span-8 studio-card p-8 md:p-12 border border-border rounded-lg bg-surface shadow-none">
            <div className="mono-label text-[10px] text-muted-foreground mb-6">PROJECT BRIEFING FORM</div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mono-label text-[10px] text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="h-11 rounded-md border border-border bg-background focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary px-3.5 shadow-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-medium mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mono-label text-[10px] text-muted-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="h-11 rounded-md border border-border bg-background focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary px-3.5 shadow-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-medium mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mono-label text-[10px] text-muted-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="72768 15079" 
                            className="h-11 rounded-md border border-border bg-background focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary px-3.5 shadow-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-medium mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mono-label text-[10px] text-muted-foreground">Select Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-md border border-border bg-background focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary px-3.5 shadow-none">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border border-border bg-surface rounded-md shadow-lg">
                            {['Web Dev', 'App Dev', 'AI Services', 'Voice Bots', 'WhatsApp Bots', 'System Design', 'Automation', 'SEO', 'Hosting', 'Custom Software'].map((s, i) => (
                              <SelectItem key={i} value={s.toLowerCase()} className="text-xs font-medium py-2.5 focus:bg-muted cursor-pointer">{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive text-[10px] font-medium mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mono-label text-[10px] text-muted-foreground">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project vision..."
                          className="min-h-[160px] rounded-md border border-border bg-background focus:border-primary transition-all text-sm font-normal focus:ring-1 focus:ring-primary p-3.5 leading-relaxed shadow-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-[10px] font-medium mt-1" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting} 
                  className="w-full h-12 rounded-md bg-foreground text-background hover:bg-primary hover:text-black text-xs font-bold uppercase tracking-wider transition-all border-none"
                >
                  {isSubmitting ? (
                    <Sparkles className="w-4 h-4 animate-spin" />
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span>Submit Premium Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Success Metrics Row */}
        <section className="py-12 border-y border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <MessageSquare className="w-4 h-4" />, label: 'Average Response', value: '12 Hours' },
              { icon: <Zap className="w-4 h-4" />, label: 'Project Kickoff', value: '72 Hours' },
              { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Success Rate', value: '99%' },
              { icon: <Globe className="w-4 h-4" />, label: 'Global Clients', value: '150+' }
            ].map((stat, i) => (
              <div key={i} className="pl-4 sm:pl-6 border-l border-border">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  {stat.icon}
                  <span className="mono-label text-[10px] text-muted-foreground">{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-display">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
