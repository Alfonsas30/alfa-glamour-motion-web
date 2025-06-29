
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const CallRequestCard = () => {
  const handleCallRequest = () => {
    toast("Skambučio užklausa išsiųsta! Perskambinsime per 30 minučių.");
  };

  return (
    <Card className="bg-blue-600 border-blue-500 backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        <h3 className="text-white font-bold text-lg mb-2">Nemokama konsultacija</h3>
        <p className="text-white text-sm mb-4">
          Gaukite profesionalų vertinimą savo reklamos strategijai
        </p>
        <Button 
          size="sm" 
          onClick={handleCallRequest}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Užsisakyti skambutį
        </Button>
      </CardContent>
    </Card>
  );
};
