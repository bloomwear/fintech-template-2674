
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Zap } from 'lucide-react';

interface KeyProps {
  char: string;
  isPressed?: boolean;
  isWide?: boolean;
  className?: string;
}

const Key: React.FC<KeyProps> = ({ char, isPressed, isWide, className }) => {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-b from-card to-card/80 border border-border rounded-xl flex items-center justify-center text-foreground font-semibold transition-all duration-200 shadow-lg backdrop-blur-sm",
        isWide ? "col-span-2" : "",
        isPressed 
          ? "bg-gradient-to-b from-primary to-primary/80 text-primary-foreground transform translate-y-1 shadow-2xl shadow-primary/30 border-primary scale-105" 
          : "hover:bg-gradient-to-b hover:from-accent hover:to-accent/80 transform-gpu hover:scale-105 hover:shadow-xl",
        className
      )}
      style={{
        height: '50px',
        minWidth: isWide ? '90px' : '50px'
      }}
    >
      <span className={cn("text-sm font-bold", isPressed && "text-shadow")}>
        {char}
      </span>
      {isPressed && (
        <>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/30 to-primary/10 animate-pulse"></div>
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-xl bg-gradient-to-b from-primary/20 to-transparent animate-pulse"></div>
        </>
      )}
    </div>
  );
};

const AnimatedKeyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [typingText] = useState("Operações financeiras para empresas de crescimento");
  const [currentIndex, setCurrentIndex] = useState(0);

  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const bottomRowKeys = [
    { char: 'Space', isWide: true },
    { char: 'Enter', isWide: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < typingText.length) {
        const currentChar = typingText[currentIndex].toUpperCase();
        
        // Press key
        setPressedKeys(prev => new Set([...prev, currentChar === ' ' ? 'Space' : currentChar]));
        
        // Release key after 250ms
        setTimeout(() => {
          setPressedKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(currentChar === ' ' ? 'Space' : currentChar);
            return newSet;
          });
        }, 250);
        
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentIndex(0);
        }, 3000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [currentIndex, typingText]);

  // Enhanced random key press effect
  useEffect(() => {
    const randomInterval = setInterval(() => {
      const allKeys = keyboardLayout.flat().concat(['Space']);
      const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
      
      setPressedKeys(prev => new Set([...prev, randomKey]));
      
      setTimeout(() => {
        setPressedKeys(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomKey);
          return newSet;
        });
      }, 150);
    }, 1200);

    return () => clearInterval(randomInterval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto p-10 bg-gradient-to-br from-card/60 via-card/40 to-card/20 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl">
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 rounded-3xl">
        <div className="absolute top-0 left-1/3 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 space-y-8">
        {/* Enhanced header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="h-6 w-6 text-primary animate-pulse" />
            <h3 className="text-xl font-bold text-foreground">Automação de Digitação</h3>
            <Zap className="h-6 w-6 text-primary animate-pulse" />
          </div>
          
          <div className="text-lg font-mono text-muted-foreground bg-gradient-to-r from-background/80 via-background/60 to-background/80 p-6 rounded-2xl border border-border/50 backdrop-blur-sm shadow-inner">
            <span className="text-foreground">{typingText.slice(0, currentIndex)}</span>
            <span className="animate-pulse text-primary font-bold">|</span>
            <span className="text-muted-foreground/50">{typingText.slice(currentIndex)}</span>
          </div>
        </div>

        {/* Enhanced keyboard layout */}
        <div className="space-y-4">
          {keyboardLayout.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex justify-center gap-3"
              style={{
                marginLeft: rowIndex === 1 ? '25px' : rowIndex === 2 ? '50px' : '0'
              }}
            >
              {row.map((key) => (
                <Key
                  key={key}
                  char={key}
                  isPressed={pressedKeys.has(key)}
                />
              ))}
            </div>
          ))}
          
          {/* Enhanced bottom row */}
          <div className="flex justify-center gap-3 mt-6">
            {bottomRowKeys.map((key) => (
              <Key
                key={key.char}
                char={key.char}
                isPressed={pressedKeys.has(key.char)}
                isWide={key.isWide}
                className={key.isWide ? "px-12" : "px-6"}
              />
            ))}
          </div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full animate-float"
              style={{
                left: `${15 + i * 8}%`,
                top: `${15 + (i % 4) * 25}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced bottom info */}
      <div className="text-center mt-8 text-base text-muted-foreground">
        <span className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20 backdrop-blur-sm">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse shadow-lg shadow-primary/30"></div>
          Demonstração de automação em tempo real
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse shadow-lg shadow-primary/30" style={{animationDelay: '1s'}}></div>
        </span>
      </div>
    </div>
  );
};

export default AnimatedKeyboard;
