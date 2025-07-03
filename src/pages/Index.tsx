import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const [showGif, setShowGif] = useState(true);

  const handleStart = () => {
    navigate("/game");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="min-h-screen horror-bg flex flex-col items-center justify-center p-8">
      {/* Атмосферный фон с домом */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 opacity-30"></div>
        {/* Дом */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-48 bg-gray-900 border-2 border-gray-700">
          {/* Окна дома */}
          <div className="absolute top-8 left-8 w-12 h-12 bg-yellow-400 opacity-20 border border-gray-600"></div>
          <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 opacity-20 border border-gray-600"></div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-800 border border-gray-600"></div>

          {/* Странный человек в окне с анимацией */}
          {showGif && (
            <div className="absolute top-8 left-8 w-12 h-12 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-900 rounded-full animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-2"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 ml-4"></div>
                <div className="w-4 h-1 bg-red-600 rounded mt-1 ml-2"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center fade-in">
        <h1 className="text-6xl font-bold mb-4 spooky-text text-white">
          Будь внимателен
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto slide-up">
          Персонаж идёт по улице и замечает странного человека...
        </p>

        {/* Дисклеймер */}
        <div className="mb-12 slide-up">
          <p className="text-lg font-bold warning-text max-w-xl mx-auto">
            ⚠️ Данный материал подходит не всем! Пожалуйста, если вы
            слабонервный, не играйте в эту игру!
          </p>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
          <Button
            onClick={handleStart}
            className="horror-button px-8 py-4 text-lg font-semibold text-white min-w-[180px]"
            size="lg"
          >
            <Icon name="Play" className="mr-2" />
            Начать
          </Button>

          <Button
            onClick={handleSettings}
            className="horror-button px-8 py-4 text-lg font-semibold text-white min-w-[180px]"
            variant="outline"
            size="lg"
          >
            <Icon name="Settings" className="mr-2" />
            Настройки
          </Button>

          <Button
            onClick={handleExit}
            className="horror-button px-8 py-4 text-lg font-semibold text-white min-w-[180px]"
            variant="destructive"
            size="lg"
          >
            <Icon name="LogOut" className="mr-2" />
            Выход с сайта
          </Button>
        </div>
      </div>

      {/* Дополнительные атмосферные элементы */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-white opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-white opacity-25 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Index;
