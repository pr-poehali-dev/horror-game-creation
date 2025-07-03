import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type GameScene =
  | "loading"
  | "intro"
  | "bedroom"
  | "phone"
  | "kitchen"
  | "brother"
  | "end";

const Game = () => {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState<GameScene>("loading");
  const [showText, setShowText] = useState(false);
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 70 });

  useEffect(() => {
    if (currentScene === "loading") {
      const timer = setTimeout(() => {
        setCurrentScene("intro");
        setShowText(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScene]);

  const handleBackHome = () => {
    navigate("/");
  };

  const handleGoToKitchen = () => {
    setCurrentScene("kitchen");
    setCharacterPosition({ x: 20, y: 60 });
  };

  const handleCheckPhone = () => {
    setCurrentScene("phone");
  };

  const handleGoToBrother = () => {
    setCurrentScene("brother");
    setCharacterPosition({ x: 30, y: 50 });
  };

  const handleGoToSleep = () => {
    setCurrentScene("end");
  };

  const renderLoadingScreen = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center fade-in">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Загрузка...</p>
      </div>
    </div>
  );

  const renderIntroScreen = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {showText && (
        <div className="text-center fade-in">
          <p className="text-white text-2xl max-w-2xl mx-auto leading-relaxed">
            Сплю в своей комнате, сейчас примерно 2 часа ночи.
            <br />
            От неожиданности просыпаюсь от странных звуков на кухне.
          </p>
          <Button
            onClick={() => setCurrentScene("bedroom")}
            className="horror-button mt-8 px-8 py-3 text-white"
            size="lg"
          >
            Продолжить
          </Button>
        </div>
      )}
    </div>
  );

  const renderBedroomScene = () => (
    <div className="min-h-screen horror-bg relative overflow-hidden">
      {/* Комната персонажа */}
      <div className="absolute inset-0">
        {/* Стены */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

        {/* Пол */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-800"></div>

        {/* Кровать */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gray-600 border-2 border-gray-500 rounded-lg">
          <div className="w-full h-4 bg-gray-500 rounded-t-lg"></div>
          <div className="w-full h-8 bg-gray-700 mt-2"></div>
        </div>

        {/* Стол с лампой */}
        <div className="absolute bottom-16 right-20 w-24 h-16 bg-gray-700 border border-gray-600">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gray-600 rounded-t-lg">
            <div className="w-12 h-6 bg-yellow-400 opacity-30 rounded-full -mt-2 -ml-2 animate-pulse"></div>
          </div>
        </div>

        {/* Персонаж */}
        <div
          className="absolute transition-all duration-1000 ease-in-out transform"
          style={{
            left: `${characterPosition.x}%`,
            bottom: `${characterPosition.y}%`,
            transform: `translateX(-50%) translateY(50%)`,
          }}
        >
          <div className="w-8 h-16 bg-blue-800 rounded-t-lg border border-blue-600">
            <div className="w-6 h-6 bg-pink-200 rounded-full mx-auto mt-1"></div>
            <div className="w-4 h-8 bg-blue-900 mx-auto mt-1"></div>
          </div>
        </div>
      </div>

      {/* Интерфейс выбора */}
      <div className="absolute top-8 right-8 space-y-4">
        <Card className="bg-card/90 backdrop-blur-sm border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <Button
                onClick={handleGoToKitchen}
                className="horror-button w-full text-white"
                size="sm"
              >
                <Icon name="ChefHat" className="mr-2" size={16} />
                Пойти на кухню
              </Button>
              <Button
                onClick={handleCheckPhone}
                className="horror-button w-full text-white"
                size="sm"
              >
                <Icon name="Smartphone" className="mr-2" size={16} />
                Посмотреть в телефоне
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Кнопка возврата */}
      <Button
        onClick={handleBackHome}
        className="absolute top-8 left-8 horror-button text-white"
        size="sm"
      >
        <Icon name="Home" className="mr-2" size={16} />
        Главное меню
      </Button>
    </div>
  );

  const renderPhoneScene = () => (
    <div className="min-h-screen horror-bg flex items-center justify-center p-8">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm border-border">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Smartphone" className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold text-white">Телефон</h3>
            </div>

            <div className="space-y-3">
              <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" className="text-red-400" size={16} />
                  <span className="text-red-200 font-medium">
                    Управляющая компания
                  </span>
                </div>
                <p className="text-red-200/80 text-sm mt-1">
                  Задолженность по оплате квартиры. Необходимо срочно погасить
                  долг.
                </p>
              </div>

              <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" className="text-red-400" size={16} />
                  <span className="text-red-200 font-medium">Банк</span>
                </div>
                <p className="text-red-200/80 text-sm mt-1">
                  Просроченный платёж. Обратитесь в отделение банка.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Button
                onClick={handleGoToSleep}
                className="horror-button w-full text-white"
                size="lg"
              >
                <Icon name="Bed" className="mr-2" />
                Лечь спать
              </Button>
              <Button
                onClick={() => setCurrentScene("bedroom")}
                className="horror-button w-full text-white"
                variant="outline"
                size="sm"
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Назад
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderKitchenScene = () => (
    <div className="min-h-screen horror-bg relative overflow-hidden">
      {/* Кухня */}
      <div className="absolute inset-0">
        {/* Стены */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-black"></div>

        {/* Пол */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-600 to-gray-700"></div>

        {/* Кухонный гарнитур */}
        <div className="absolute bottom-16 left-8 w-64 h-24 bg-gray-600 border-2 border-gray-500">
          <div className="w-full h-4 bg-gray-500"></div>
          <div className="flex space-x-2 mt-2 ml-2">
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
            <div className="w-8 h-8 bg-gray-400 rounded"></div>
          </div>
        </div>

        {/* Холодильник */}
        <div className="absolute bottom-16 right-8 w-16 h-32 bg-gray-300 border-2 border-gray-400">
          <div className="w-4 h-4 bg-gray-500 rounded-full mt-2 ml-2"></div>
        </div>

        {/* Персонаж */}
        <div
          className="absolute transition-all duration-1000 ease-in-out transform"
          style={{
            left: `${characterPosition.x}%`,
            bottom: `${characterPosition.y}%`,
            transform: `translateX(-50%) translateY(50%)`,
          }}
        >
          <div className="w-8 h-16 bg-blue-800 rounded-t-lg border border-blue-600">
            <div className="w-6 h-6 bg-pink-200 rounded-full mx-auto mt-1"></div>
            <div className="w-4 h-8 bg-blue-900 mx-auto mt-1"></div>
          </div>
        </div>
      </div>

      {/* Интерфейс */}
      <div className="absolute top-8 right-8">
        <Card className="bg-card/90 backdrop-blur-sm border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <p className="text-white text-sm">
                Осматриваю кухню... Всё тихо.
              </p>
              <Button
                onClick={handleGoToBrother}
                className="horror-button w-full text-white"
                size="sm"
              >
                <Icon name="User" className="mr-2" size={16} />
                Проверить брата
              </Button>
              <Button
                onClick={() => setCurrentScene("bedroom")}
                className="horror-button w-full text-white"
                variant="outline"
                size="sm"
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Вернуться в комнату
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        onClick={handleBackHome}
        className="absolute top-8 left-8 horror-button text-white"
        size="sm"
      >
        <Icon name="Home" className="mr-2" size={16} />
        Главное меню
      </Button>
    </div>
  );

  const renderBrotherScene = () => (
    <div className="min-h-screen horror-bg relative overflow-hidden">
      {/* Комната брата */}
      <div className="absolute inset-0">
        {/* Стены */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

        {/* Пол */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-800"></div>

        {/* Кровать брата */}
        <div className="absolute bottom-16 right-20 w-48 h-24 bg-gray-600 border-2 border-gray-500 rounded-lg">
          <div className="w-full h-4 bg-gray-500 rounded-t-lg"></div>
          {/* Спящий брат */}
          <div className="absolute top-2 left-8 w-6 h-12 bg-green-800 rounded-t-lg">
            <div className="w-4 h-4 bg-pink-200 rounded-full mx-auto mt-1"></div>
          </div>
        </div>

        {/* Персонаж */}
        <div
          className="absolute transition-all duration-1000 ease-in-out transform"
          style={{
            left: `${characterPosition.x}%`,
            bottom: `${characterPosition.y}%`,
            transform: `translateX(-50%) translateY(50%)`,
          }}
        >
          <div className="w-8 h-16 bg-blue-800 rounded-t-lg border border-blue-600">
            <div className="w-6 h-6 bg-pink-200 rounded-full mx-auto mt-1"></div>
            <div className="w-4 h-8 bg-blue-900 mx-auto mt-1"></div>
          </div>
        </div>
      </div>

      {/* Интерфейс */}
      <div className="absolute top-8 right-8">
        <Card className="bg-card/90 backdrop-blur-sm border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <p className="text-white text-sm">
                Брат крепко спит. Всё в порядке.
              </p>
              <Button
                onClick={handleGoToSleep}
                className="horror-button w-full text-white"
                size="sm"
              >
                <Icon name="Bed" className="mr-2" size={16} />
                Вернуться спать
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button
        onClick={handleBackHome}
        className="absolute top-8 left-8 horror-button text-white"
        size="sm"
      >
        <Icon name="Home" className="mr-2" size={16} />
        Главное меню
      </Button>
    </div>
  );

  const renderEndScene = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center fade-in">
        <h2 className="text-4xl font-bold text-white mb-6 spooky-text">
          Конец главы
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ложусь спать, но странные звуки всё ещё беспокоят меня...
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => setCurrentScene("bedroom")}
            className="horror-button px-8 py-3 text-white mr-4"
            size="lg"
          >
            <Icon name="RotateCcw" className="mr-2" />
            Играть заново
          </Button>
          <Button
            onClick={handleBackHome}
            className="horror-button px-8 py-3 text-white"
            variant="outline"
            size="lg"
          >
            <Icon name="Home" className="mr-2" />
            Главное меню
          </Button>
        </div>
      </div>
    </div>
  );

  switch (currentScene) {
    case "loading":
      return renderLoadingScreen();
    case "intro":
      return renderIntroScreen();
    case "bedroom":
      return renderBedroomScene();
    case "phone":
      return renderPhoneScene();
    case "kitchen":
      return renderKitchenScene();
    case "brother":
      return renderBrotherScene();
    case "end":
      return renderEndScene();
    default:
      return renderLoadingScreen();
  }
};

export default Game;
