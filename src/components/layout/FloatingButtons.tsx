import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <TooltipProvider>
        {/* Contact Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl animate-float"
              onClick={() => window.location.href = '/contact'}
            >
              <Mail className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Contact Us</p>
          </TooltipContent>
        </Tooltip>

        {/* WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl animate-float"
              style={{ animationDelay: '1s' }}
              onClick={() => window.open('https://wa.me/917276815079', '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FloatingButtons;
