import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Settings = () => {
  const navigate = useNavigate();
  const [gameLevel, setGameLevel] = useState("normal");

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen horror-bg flex items-center justify-center p-8">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-sm border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white spooky-text">
            Настройки
          </CardTitle>
          <CardDescription className="text-gray-300">
            Настройте параметры игры
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="game-level" className="text-white">
              Уровень сложности
            </Label>
            <Select value={gameLevel} onValueChange={setGameLevel}>
              <SelectTrigger className="horror-button text-white">
                <SelectValue placeholder="Выберите уровень" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="easy" className="text-white">
                  Лёгкий
                </SelectItem>
                <SelectItem value="normal" className="text-white">
                  Обычный
                </SelectItem>
                <SelectItem value="hard" className="text-white">
                  Сложный
                </SelectItem>
                <SelectItem value="nightmare" className="text-white">
                  Кошмар
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Icon
                name="AlertTriangle"
                className="text-yellow-400"
                size={20}
              />
              <span className="text-yellow-200 font-medium">В разработке</span>
            </div>
            <p className="text-yellow-200/80 text-sm mt-1">
              Настройки уровня сложности пока находятся в стадии разработки.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleBack}
              className="horror-button w-full text-white"
              size="lg"
            >
              <Icon name="ArrowLeft" className="mr-2" />
              Назад в главное меню
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Атмосферные элементы */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-red-400 opacity-40 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-red-400 opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-red-400 opacity-35 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Settings;
