"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Folder, UserCheck, Gauge } from "lucide-react";

const cards = [
  {
    title: "Welcome",
    icon: <Gauge className="h-5 w-5" />,
    value: "Hamid Maqbool",
    desc: "Your personalized dashboard",
    gradient: "from-indigo-500 via-indigo-600 to-purple-600",
    textWhite: true,
  },
  {
    title: "Users",
    icon: <Users className="h-5 w-5" />,
    value: "128",
    desc: "Active this week",
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    textWhite: true,
  },
  {
    title: "Projects",
    icon: <Folder className="h-5 w-5" />,
    value: "12",
    desc: "Ongoing projects",
    gradient: "from-green-500 via-green-600 to-emerald-600",
    textWhite: true,
  },
  {
    title: "Team",
    icon: <UserCheck className="h-5 w-5" />,
    value: "7",
    desc: "Collaborators",
    gradient: "from-pink-500 via-pink-600 to-rose-600",
    textWhite: true,
  },
];

export function SectionCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          className={`hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${card.gradient} ${
            card.textWhite ? "text-white" : "text-gray-800"
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {card.icon}
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{card.value}</p>
            <p
              className={`text-sm ${
                card.textWhite ? "opacity-90" : "text-gray-500"
              }`}
            >
              {card.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
