import { useEffect } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { fetchItems, Roll } from "@/store/slices/itemsSlice";
import ArrowIcon from "@/assets/icons/arrow.svg";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items.allItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Roll }) => (
    <>
      <View className=" rounded-lg p-2 sm:w-1/2">
        <Image
          source={{ uri: item.imageUrl }}
          className="w-48 h-48 rounded-lg mb-3"
        />
        <View className="flex-row items-center space-x-2">
          <Text className=" text-white text-lg font-bold mr-1">
            {item.name}
          </Text>
          <Text className="text-sm text-gray-500">{item.weight}</Text>
        </View>
        <Text
          className="text-sm text-gray-500 mb-2 w-40"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.recipe}
        </Text>{" "}
        <TouchableOpacity className="w-24 bg-neutral-700 p-2 rounded-lg mb-2 flex-row items-center justify-between gap-2">
          <Text className=" text-white">{item.price}</Text>
          <ArrowIcon width={18} height={18} fill="white" />
        </TouchableOpacity>
      </View>
    </>
  );

  if (items.length === 0) return <Text className="text-white">Loading...</Text>;

  return (
    <View className="bg-neutral-900 flex-1">
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
      />
    </View>
  );
}
