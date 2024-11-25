import apexImage from "../../assets/images/slider/apex-legends-image.webp";
import csgoImage from "../../assets/images/slider/csgo2-image.webp";
import elderScrollsImage from "../../assets/images/slider/elder-scrolls-online-image.webp";
import godotImage from "../../assets/images/slider/godot-game-engine-image.webp";
import maddenImage from "../../assets/images/slider/madden-24-image.webp";
import pubgImage from "../../assets/images/slider/pubg-image.webp";
import silentHillImage from "../../assets/images/slider/silent-hill-2-remake-image.webp";
import unrealEngineImage from "../../assets/images/slider/unreal-engine-image.webp";
import valorantImage from "../../assets/images/slider/valorant-image.webp";

// Array of static images
export const sliderImages = [
  apexImage,
  csgoImage,
  elderScrollsImage,
  godotImage,
  maddenImage,
  pubgImage,
  silentHillImage,
  unrealEngineImage,
  valorantImage,
];

// Fetch dynamic images in the future (placeholder)
export const fetchSliderImages = async () => {
  try {
    const response = await fetch("https://api.example.com/slider-images");
    if (!response.ok) throw new Error("Failed to fetch images");
    const data = await response.json();
    return data.map((item) => item.imageUrl); // Adjust based on API structure
  } catch (error) {
    console.error("Error fetching slider images:", error);
    return sliderImages; // Fallback to static images
  }
};
