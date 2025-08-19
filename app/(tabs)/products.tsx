import { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import "../../global.css";

const DATA = [
  { id: "1", title: "ZYN Mint", nicotine: 3 },
  { id: "2", title: "ZYN Berry", nicotine: 6 },
  { id: "3", title: "ZYN Citrus", nicotine: 3 },
  { id: "4", title: "ZYN Coffee", nicotine: 6 },
  { id: "5", title: "ZYN Mango", nicotine: 3 },
  { id: "6", title: "ZYN Vanilla", nicotine: 6 },
  { id: "7", title: "VELO Mint", nicotine: 4 },
  { id: "8", title: "VELO Berry", nicotine: 4 },
  { id: "9", title: "VELO Citrus", nicotine: 4 },
  { id: "10", title: "VELO Coffee", nicotine: 4 },
  { id: "11", title: "VELO Mango", nicotine: 4 },
  { id: "12", title: "VELO Vanilla", nicotine: 4 },
  { id: "13", title: "Skruf Fresh", nicotine: 8 },
  { id: "14", title: "Skruf Mint", nicotine: 8 },
  { id: "15", title: "Skruf Berry", nicotine: 8 },
  { id: "16", title: "Skruf Citrus", nicotine: 8 },
  { id: "17", title: "Skruf Coffee", nicotine: 8 },
  { id: "18", title: "Skruf Mango", nicotine: 8 },
  { id: "19", title: "Skruf Vanilla", nicotine: 8 },
  { id: "20", title: "Skruf Coffee", nicotine: 8 },
];

type Product = (typeof DATA)[0];

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleAddProduct = () => {
    // Add logic to track the product
    console.log(
      `Added ${selectedProduct?.title} with ${selectedProduct?.nicotine}mg nicotine`
    );
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-zinc-800 pt-16">
      <FlatList
        key={"products-list"}
        data={DATA}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleProductPress(item)}
            className="p-10 border border-zinc-900 w-1/2 active:bg-zinc-700"
          >
            <Text className="text-lg text-white font-bold text-center">
              {item.title}
            </Text>
            <Text className="text-sm text-gray-400 text-center mt-2">
              {item.nicotine}mg
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-lg p-6 m-4 w-4/5">
            <Text className="text-xl font-bold text-center mb-4">
              {selectedProduct?.title}
            </Text>

            <View className="items-center mb-6">
              <Text className="text-4xl font-bold text-red-500 mb-2">
                {selectedProduct?.nicotine}mg
              </Text>
              <Text className="text-gray-600">Nicotine per portion</Text>
            </View>

            <View className="flex-row justify-between">
              <Pressable
                onPress={() => setModalVisible(false)}
                className="bg-gray-500 px-6 py-3 rounded-lg flex-1 mr-2"
              >
                <Text className="text-white text-center font-semibold">
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={handleAddProduct}
                className="bg-red-500 px-6 py-3 rounded-lg flex-1 ml-2"
              >
                <Text className="text-white text-center font-semibold">
                  Add to Today
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
