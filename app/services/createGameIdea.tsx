import { supabase } from "../../lib/supabase";
import { GameIdea } from "../models/GameIdea";

export const submitGameIdea = async (gameIdea: GameIdea) => {
  const { data, error } = await supabase
    .from('game_ideas')
    .insert([{
      title: gameIdea.title,
      description: gameIdea.description,
      category: gameIdea.category,
      features: gameIdea.features,
      in_development: gameIdea.inDevelopment,
      extra_details: gameIdea.extraDetails
    }])
    .select();

  if (error) throw error;
  return data;
};