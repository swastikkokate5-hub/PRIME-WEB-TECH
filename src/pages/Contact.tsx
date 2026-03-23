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
  Zap
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
    { icon: <Mail />, label: 'Email Us', value: 'Primewebtech1@gmail.com', color: 'primary' },
    { icon: <Phone />, label: 'Call Us', value: '+91 72768 15079', color: 'accent' },
    { icon: <MapPin />, label: 'Visit Us', value: 'Narhe, Pune, Maharashtra 411041', color: 'primary' }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
      <PageMeta 
        title="Contact PrimeWenTech | Start Your Tech Journey in Pune" 
        description="Ready to scale your business? Contact PrimeWenTech today for a free consultation on web development, AI automation, and IT strategy in Pune."
      />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/20 text-primary text-[10px] font-bold mb-8 shadow-lg tracking-[0.2em] uppercase">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Direct Line To Excellence</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight text-foreground">Let's <span className="gold-text-gradient">Connect</span></h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to start your next project? We're here to help you navigate your digital
            journey and build the technology your business deserves.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[35%] flex flex-col gap-10"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Get In Touch</h2>
            <p className="text-base text-muted-foreground mb-10 max-w-md leading-relaxed font-medium">
              Whether you have a specific project in mind or just want to explore possibilities,
              our team is ready to provide expert guidance and elite execution.
            </p>

            <div className="flex flex-col gap-8">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:gold-gradient group-hover:text-black transition-all shadow-xl group-hover:scale-110 premium-shadow`}>
                    {React.cloneElement(info.icon as React.ReactElement<any>, { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1">{info.label}</div>
                    <div className="text-xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter uppercase">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[65%] glass p-10 md:p-16 rounded-[3.5rem] shadow-2xl border-none relative overflow-hidden glow-gold-hover premium-shadow"
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
              <Zap className="w-64 h-64 text-primary animate-float" />
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 block text-foreground/50">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-14 rounded-2xl glass border border-border/50 focus:border-primary transition-all text-base font-bold focus:ring-0 px-6" {...field} />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 block text-foreground/50">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-14 rounded-2xl glass border border-border/50 focus:border-primary transition-all text-base font-bold focus:ring-0 px-6" {...field} />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 block text-foreground/50">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="72768 15079" className="h-14 rounded-2xl glass border border-border/50 focus:border-primary transition-all text-base font-bold focus:ring-0 px-6" {...field} />
                        </FormControl>
                        <FormMessage className="text-destructive text-[10px] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 block text-foreground/50">Select Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl glass border border-border/50 focus:border-primary transition-all text-base font-bold focus:ring-0 px-6">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="glass border-border/50 rounded-2xl shadow-2xl">
                            {['Web Dev', 'App Dev', 'AI Services', 'Voice Bots', 'WhatsApp Bots', 'System Design', 'Automation', 'SEO', 'Hosting', 'Custom Software'].map((s, i) => (
                              <SelectItem key={i} value={s.toLowerCase()} className="text-sm font-bold py-3 focus:bg-primary/20 cursor-pointer">{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive text-[10px] font-bold mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 block text-foreground/50">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project vision..."
                          className="min-h-[220px] rounded-2xl glass border border-border/50 focus:border-primary transition-all text-base font-bold focus:ring-0 p-8 leading-relaxed"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-[10px] font-bold mt-1" />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-18 rounded-full gold-gradient text-black text-xl font-black shadow-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 group border-none py-8 uppercase tracking-widest">
                  {isSubmitting ? (
                    <Sparkles className="w-7 h-7 animate-spin" />
                  ) : (
                    <>
                      Submit Premium Request <Send className="w-7 h-7 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <section className="py-16 border-y border-border bg-secondary/10 rounded-[3rem] relative overflow-hidden mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { icon: <MessageSquare />, label: 'Average Response', value: '12 Hours' },
                { icon: <Zap />, label: 'Project Kickoff', value: '72 Hours' },
                { icon: <CheckCircle2 />, label: 'Success Rate', value: '99%' },
                { icon: <Globe />, label: 'Global Clients', value: '150+' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:gold-gradient group-hover:text-black transition-all shadow-md group-hover:scale-110">
                    {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
