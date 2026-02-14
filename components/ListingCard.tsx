
import React from 'react';
import { SehriSpot } from '../types';
import { IslamicPattern } from './Pattern';

// Import sub-components
import { ListingCardHeader } from './ListingCardHeader';
import { ListingCardDetails } from './ListingCardDetails';
import { ListingCardActions } from './ListingCardActions';

interface ListingCardProps {
  data: SehriSpot;
}

/**
 * The main Card container.
 * 
 * It handles the outer shell (animations, border colors, background pattern)
 * and composes the Header, Details, and Actions sub-components.
 */
export const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  const isFree = data.foodType === 'Free';

  return (
    <div className={`
      relative group overflow-hidden h-full flex flex-col
      bg-gradient-to-br from-white via-[#fffefc] to-[#fcf9f0]
      rounded-3xl p-5 
      border border-gold-antique/70
      shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05),0_0_0_1px_rgba(184,134,11,0.15)]
      
      hover:border-gold-antique
      hover:shadow-[0_20px_50px_-10px_rgba(184,134,11,0.3),0_0_25px_0px_rgba(212,175,55,0.3)]
      hover:-translate-y-2 
      transition-all duration-500 ease-out
    `}>
      
      {/* Background Pattern - Four-Fold Octagon & Star Grid - Reduced Opacity */}
      <IslamicPattern opacity={0.12} variant="octagon-star-lattice" className="text-gold-antique" />

      {/* Decorative top border */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${isFree ? 'bg-primary' : 'bg-gold-antique'} z-10 opacity-80`} />

      {/* Content Wrapper */}
      <div className="flex-1 relative z-10 flex flex-col">
        
        <ListingCardHeader 
          name={data.name}
          verified={data.verified}
          foodType={data.foodType}
          lastVerified={data.lastVerified}
          isFree={isFree}
        />

        <div className="mt-2 flex-1">
          <ListingCardDetails {...data} />
        </div>

        {/* Action Footer */}
        <ListingCardActions data={data} />
      </div>
    </div>
  );
};
