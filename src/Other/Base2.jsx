import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const product = [
  { 
    id: "1", 
    price: "1000", 
    name: "Luxury Grey Sofa", 
    description: "Bring elegance and comfort into your living room with this Luxury Grey Sofa. Upholstered in soft premium grey fabric, it blends seamlessly with both modern and classic interiors. The deep cushioned seating ensures superior comfort, while the sturdy wooden legs provide long-lasting durability. Perfect for family gatherings or relaxing evenings, this sofa offers a cozy yet sophisticated seating solution that elevates your home’s ambience.", 
    rating: 4.5, 
    image: "https://www.tommyfranks.co.uk/cdn/shop/products/Screenshot2023-04-0415.18.09.png?v=1680592951" 
  },
  { 
    id: "2", 
    price: "750", 
    name: "Classic White Chair", 
    description: "A timeless addition to your home, the Classic White Chair is crafted with a solid wooden frame for strength and stability. Its ergonomic design provides excellent support, while the minimalist white finish gives it a versatile look that complements any décor. Whether used as a dining chair, reading nook companion, or an accent piece in the living room, this chair adds a touch of simplicity and charm to your space.", 
    rating: 4.0, 
    image: "https://t3.ftcdn.net/jpg/01/25/57/22/360_F_125572293_LLFU3I8VezUmqR4NBwln8eO4euTZuP15.jpg" 
  },
  { 
    id: "3", 
    price: "450", 
    name: "Modern Beige Lamp", 
    description: "Light up your living space with the Modern Beige Table Lamp, designed with a sleek minimalist style that blends into any décor theme. Featuring a neutral beige shade and sturdy base, this lamp creates a warm, inviting glow that is perfect for study areas, bedrooms, or living rooms. Compact yet stylish, it serves as both a functional lighting solution and a decorative accessory.", 
    rating: 3.8, 
    image: "https://img.freepik.com/premium-photo/modern-table-lamp-isolated-white-background_798986-413.jpg" 
  },
  { 
    id: "4", 
    price: "650", 
    name: "Elegant Grey Curtains", 
    description: "Transform your windows with the Elegant Grey Curtains, crafted from premium-quality soft fabric that drapes beautifully to the floor. The neutral grey color adds sophistication while providing a cozy, calming effect in your room. Designed for light control and privacy, these curtains are ideal for living rooms, bedrooms, or offices, instantly enhancing the ambience with their subtle luxury.", 
    rating: 4.2, 
    image: "https://m.media-amazon.com/images/I/81W1rNQH8HL._UF894,1000_QL80_.jpg" 
  },
  { 
    id: "5", 
    price: "1200", 
    name: "Polished Wooden Table", 
    description: "The Polished Wooden Table combines classic craftsmanship with a modern glossy finish. Built from high-quality wood, this table is not only stylish but also sturdy and durable, making it suitable for both everyday use and special occasions. Its rich polished surface reflects natural warmth, making it a perfect centerpiece for dining rooms, offices, or living areas.", 
    rating: 4.7, 
    image: "https://as2.ftcdn.net/jpg/02/56/22/93/1000_F_256229326_jQA0y6xQrqolau1er4Ii620KBbs6Uwl4.jpg" 
  },
  { 
    id: "6", 
    price: "850", 
    name: "Ergonomic Black Study Chair", 
    description: "Stay comfortable during long hours of work or study with the Ergonomic Black Study Chair. Designed with an adjustable backrest and cushioned seat, this chair ensures proper posture support. Its breathable fabric and sleek black finish make it a perfect blend of practicality and style for your home office or study space.", 
    rating: 4.1, 
    image: "https://media.istockphoto.com/id/1160551657/photo/new-office-chair-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=WG1zD2tCR1jqHNx96doT9zBNsbUH4nWpVjXhdOOQ434=" 
  },
  { 
    id: "7", 
    price: "1500", 
    name: "King Size White Bed", 
    description: "Enjoy restful nights on this King Size White Bed, designed with plush cushioning and premium padding for unmatched comfort. Its clean white finish adds brightness and elegance to your bedroom, while the large frame provides ample space for relaxation. Ideal for modern interiors, this bed is a perfect combination of luxury and functionality.", 
    rating: 4.9, 
    image: "https://media.istockphoto.com/id/1453505460/photo/3d-illustration-of-a-comfortable-bed-on-a-white-background.jpg?s=612x612&w=0&k=20&c=C6mngXBtz87q2T8BHu66aP3P2OBSJDd6uAPAFkdw5GE=" 
  },
  { 
    id: "8", 
    price: "300", 
    name: "Soft Beige Pillow", 
    description: "Enhance your comfort with the Soft Beige Pillow, crafted from cozy fabric for everyday use. Its neutral tone blends effortlessly with any interior décor, making it suitable for sofas, chairs, or beds. Whether used for extra support or decorative purposes, this pillow adds a soft and stylish touch to your living space.", 
    rating: 3.9, 
    image: "https://media.istockphoto.com/id/1411702909/photo/open-book-on-tray-in-room-near-beige-armchair-with-pillow.jpg?s=612x612&w=0&k=20&c=PokHBOKgcsDsPXfNvqOD0hAD0LQMA3K7rPKqXCrdPlo=" 
  },
  { 
    id: "9", 
    price: "600", 
    name: "Persian Style Carpet", 
    description: "Add a royal touch to your living room with the Persian Style Carpet. Designed with intricate patterns and rich detailing, this carpet brings warmth and elegance to any space. Its durable weave ensures long-lasting use while providing a soft and comfortable underfoot experience.", 
    rating: 4.3, 
    image: "https://previews.123rf.com/images/photobeps/photobeps1802/photobeps180200803/95776216-a-precious-persian-carpet-on-white-background.jpg" 
  },
  { 
    id: "10", 
    price: "950", 
    name: "Classic Wooden Bookshelf", 
    description: "Organize your books and décor items in style with the Classic Wooden Bookshelf. Featuring a tall standing frame with multiple shelves, this piece combines functionality with elegance. The light brown wood finish adds natural charm, making it perfect for living rooms, offices, or bedrooms.", 
    rating: 4.6, 
    image: "https://static.vecteezy.com/system/resources/previews/056/133/788/non_2x/displayed-wood-white-photo.jpg" 
  },
  { 
    id: "11", 
    price: "700", 
    name: "Simple White Dining Chair", 
    description: "Minimal yet functional, the Simple White Dining Chair adds a clean and stylish touch to your dining area. Made with durable materials and a matte finish, it ensures comfort while maintaining a contemporary look. Lightweight and versatile, it fits perfectly with any dining table design.", 
    rating: 4.2, 
    image: "https://www.ikea.com/us/en/images/products/adde-chair-white__0728280_pe736170_s5.jpg" 
  },
  { 
    id: "12", 
    price: "1800", 
    name: "Spacious White Wardrobe", 
    description: "Keep your clothes and accessories neatly organized in the Spacious White Wardrobe. Designed with large sliding doors and multiple compartments, it offers ample storage while maintaining a sleek and modern look. Its glossy white finish brightens up any bedroom, making it both functional and stylish.", 
    rating: 4.8, 
    image: "https://www.ikea.com/us/en/images/products/pax-wardrobe-combination-white__0855930_pe557276_s5.jpg" 
  },
  { 
    id: "13", 
    price: "400", 
    name: "Beige Desk Lamp", 
    description: "Compact and stylish, the Beige Desk Lamp is designed for reading, studying, or working. With its soft beige tone and adjustable neck, it provides focused lighting without straining your eyes. Ideal for bedrooms, offices, or study tables, this lamp combines simplicity with practicality.", 
    rating: 4.1, 
    image: "https://www.ikea.com/us/en/images/products/roedflik-desk-lamp-light-beige__1327054_pe944348_s5.jpg" 
  },
  { 
    id: "14", 
    price: "2200", 
    name: "Extendable White Dining Table", 
    description: "Host gatherings in style with the Extendable White Dining Table. Its sleek glossy white surface and extendable design make it both practical and elegant. Perfect for both small family meals and larger dinner parties, this table adapts to your needs while maintaining a modern and sophisticated look.", 
    rating: 4.7, 
    image: "https://www.ikea.com/us/en/images/products/ingatorp-extendable-table-white__1097285_pe864871_s5.jpg" 
  },
  { 
    id: "15", 
    price: "1300", 
    name: "Glossy White TV Stand", 
    description: "Upgrade your living room with the Glossy White TV Stand. Compact in design yet spacious in storage, it features closed storage doors that keep your entertainment area neat and clutter-free. The sleek white finish complements modern décor styles perfectly.", 
    rating: 4.5, 
    image: "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0723576_pe734034_s5.jpg" 
  },
  { 
    id: "16", 
    price: "650", 
    name: "Oak Veneer Side Table", 
    description: "Simple yet elegant, the Oak Veneer Side Table is perfect as a bedside table or an accent piece in your living room. Its round surface and smooth veneer finish highlight natural wood grains, offering warmth and style to any interior setup.", 
    rating: 4.2, 
    image: "https://www.ikea.com/us/en/images/products/listerby-side-table-oak-veneer__1022555_pe832813_s5.jpg" 
  },
  { 
    id: "17", 
    price: "1200", 
    name: "Dark Brown Writing Desk", 
    description: "Designed for productivity, the Dark Brown Writing Desk offers a clean and modern surface for working or studying. With a sleek black-brown finish and built-in storage, it blends practicality with a minimalist style. Ideal for home offices or study corners.", 
    rating: 4.4, 
    image: "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg" 
  },
  { 
    id: "18", 
    price: "900", 
    name: "Dark Grey Wall Cabinet", 
    description: "Maximize your storage space with the Dark Grey Wall Cabinet. Featuring a sleek and modern finish, this cabinet mounts easily on your wall to keep belongings organized without taking up floor space. Its dark grey color complements both modern and industrial interiors.", 
    rating: 4.3, 
    image: "https://www.ikea.com/us/en/images/products/eket-wall-mounted-cabinet-combination-dark-gray__1132813_pe878305_s5.jpg" 
  },
  { 
    id: "19", 
    price: "1500", 
    name: "Beige Accent Armchair", 
    description: "Relax in style with the Beige Accent Armchair, upholstered in soft beige fabric for maximum comfort. Its modern design and cushioned build make it a perfect addition to living rooms, bedrooms, or reading corners. Durable and inviting, it balances comfort with aesthetics effortlessly.", 
    rating: 4.5, 
    image: "https://www.ikea.com/us/en/images/products/ekenaeset-armchair-kilanda-light-beige__1109687_pe870153_s5.jpg" 
  },
  { 
    id: "20", 
    price: "1100", 
    name: "Rattan Ottoman", 
    description: "The Rattan Ottoman combines style and practicality with built-in storage and a textured anthracite rattan finish. Perfect as a footrest, seat, or storage unit, this ottoman is a versatile piece that adds rustic charm to your living space.", 
    rating: 4.1, 
    image: "https://www.ikea.com/us/en/images/products/gamlehult-ottoman-with-storage-rattan-anthracite__0842809_pe719505_s5.jpg" 
  },
  { 
    id: "21", 
    price: "800", 
    name: "Flatwoven Yellow Rug", 
    description: "Brighten up your home with the Flatwoven Yellow Rug, handmade in warm yellow and beige tones. Its durable flatwoven design is both stylish and practical, adding color and coziness to your floor space. Ideal for living rooms, bedrooms, or study corners.", 
    rating: 4.0, 
    image: "https://www.ikea.com/us/en/images/products/telegraflinje-rug-flatwoven-yellow-beige__1185071_pe898252_s5.jpg?f=s" 
  },
  { 
    id: "22", 
    price: "500", 
    name: "White Desk Organizer", 
    description: "Keep your workspace tidy with the White Desk Organizer. Compact and lightweight, it helps you neatly arrange office supplies, stationery, or accessories. Its matte white finish gives it a clean and modern look that fits well in any study or office.", 
    rating: 4.3, 
    image: "https://www.ikea.com/us/en/images/products/tjena-desk-organizer-white__0910640_pe667300_s5.jpg" 
  },
  { 
    id: "23", 
    price: "1300", 
    name: "Modern Chest of Drawers", 
    description: "The Modern Chest of Drawers offers ample storage space with its sturdy build and smooth finish. Designed with multiple compartments, it is perfect for organizing clothes, accessories, or essentials. Stylish and practical, it enhances the elegance of any bedroom or living area.", 
    rating: 4.4, 
    image: "https://img.freepik.com/premium-vector/realistic-icon-with-modern-white-chest-drawers-with-small-round-handles-vector-illustration_1284-66918.jpg" 
  },
  { 
    id: "24", 
    price: "950", 
    name: "White Coffee Table", 
    description: "The White Coffee Table features a glossy white finish with a clean and minimalist design. Perfect for small and large living rooms alike, it provides ample space for décor, books, or refreshments while maintaining a modern, uncluttered aesthetic.", 
    rating: 4.1, 
    image: "https://www.ikea.com/us/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg" 
  }
];





const Base2 = () => {

  const navigation = useNavigation();
   
  const renderItem = ({ item }) => (

    <Pressable onPress={() => navigation.navigate("Base3", { item : item })} 
  style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.price}>₹ {item.price} | {item.rating} <Icon name="star" size={16} color="brown" /></Text>

<Text style={styles.name}>
  {item.name} 
</Text>


      
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 320 }}
        initialNumToRender={6} 
        maxToRenderPerBatch={8}
         windowSize={5}
        
      />
    </SafeAreaView>
  );
};

export default Base2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    width: wp("44%"),
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: hp("15%"),
    resizeMode: "contain",
    marginBottom: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 3,
    fontFamily:"serif"
  },
  price: {
    fontSize: 13,
    color: "green",
    fontWeight:600
  },
});
