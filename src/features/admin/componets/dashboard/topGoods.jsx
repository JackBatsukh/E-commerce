import React from 'react';

const TopGoods = () => {
    return (
      <div className="bg-white rounded-lg border shadow p-4 w-full lg:w-1/2">
        <h1 className="text-xl font-bold">Хамгийн их зарагдсан бараа</h1>
        <div className="flex flex-col gap-4 pt-4">
          <li className="text-lg">Red lipstick</li>
          <li className="text-lg">
            Essence Mascara Lash PrincessEssence Mascara
          </li>
          <li className="text-lg">Powder CanisterPowder Canister</li>
          <li className="text-lg">Eyeshadow Palette with Mirror</li>
          <li className="text-lg">Calvin Klein CK One</li>
          <li className="text-lg">Red Nail PolishRed Nail Polish</li>
          <li className="text-lg">Annibale Colombo BedAnnibale Colombo Bed </li>
        </div>
      </div>
    );
}

export default TopGoods;
