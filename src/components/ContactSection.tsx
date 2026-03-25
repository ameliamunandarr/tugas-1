import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ax0mi2l',
        'template_viuaaad',
        formData,
        '2SXY9MF0RizIXIkOt'
      );
    
    } finally {
      setIsSubmitting(false);
      setSuccess(true);

      toast({
        title: 'Message Sent',
        description: 'Your message has been delivered successfully!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-white to-gray-50 
      dark:from-[#050816] dark:to-[#050816]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-pink-900/20" />
        <div className="hidden dark:block absolute top-[-100px] left-[-100px] w-[240px] h-[240px] bg-indigo-500/15 blur-[120px] rounded-full" />
        <div className="hidden dark:block absolute bottom-[-100px] right-[-100px] w-[240px] h-[240px] bg-pink-500/15 blur-[120px] rounded-full" />

        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
        <div className="dark:hidden absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-indigo-200/30 blur-[100px] rounded-full" />
        <div className="dark:hidden absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-pink-200/30 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-indigo-600 dark:text-indigo-300 mb-3">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
            bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="h-[3px] mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6"
          />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaboration, learning, or just a friendly chat.
          </p>
        </motion.div>

        {/* Card */}
        <div className="relative max-w-6xl mx-auto bg-white/70 dark:bg-white/5 rounded-[40px] p-8 md:p-12 shadow-xl border border-black/5 dark:border-white/10 backdrop-blur-xl hover:shadow-[0_0_80px_rgba(139,92,246,0.3)] transition-all">
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 80, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold 
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
                bg-clip-text text-transparent">
                Collaborate & Innovate
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Have a cool idea, a school project, or just want to say hi?  
                Feel free to reach out — I'm always excited to collaborate and  
                <span className="text-indigo-500"> share ideas</span>
              </p>
              <a href="mailto:amlmnndr@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Mail className="text-indigo-500 group-hover:scale-110 transition" />
                <p className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition">
                  amlmnndrr@gmail.com
                </p>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-500" />
                <p className="font-semibold text-gray-700 dark:text-gray-300">Indonesia</p>
              </div>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-sm text-indigo-500 font-medium pt-4">
                Turning ideas into real projects — let’s collaborate!
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 80, duration: 0.8 }}
              className="relative bg-white/60 dark:bg-white/5 p-6 rounded-3xl shadow-inner border border-black/5 dark:border-white/10 space-y-4 overflow-hidden backdrop-blur-xl"
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="absolute inset-0 bg-white/90 dark:bg-black/70 flex flex-col items-center justify-center z-20 rounded-3xl"
                  >
                    <CheckCircle className="w-16 h-16 mb-2 animate-bounce text-green-500" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Message Sent ✮⋆˙
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition" />
              <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition" />
              <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition" />
              <Textarea name="message" placeholder="Tell me something..." rows={5} value={formData.message} onChange={handleChange} required className="bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition" />

              <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-indigo-500/20 transition-all duration-300" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" /> Send Message
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}