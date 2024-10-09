import React, { useState } from "react";
import { Plus, Minus, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuSection {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
  category: string;
}

interface MenuItemListProps {
  sections: MenuSection[];
  onItemChange?: (item: MenuItem & { id: string }, quantity: number) => void;
  enableOrdering?: boolean;
}

const MenuItemList: React.FC<MenuItemListProps> = ({
  sections,
  onItemChange,
  enableOrdering = false,
}) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const generateId = (category: string, item: MenuItem, index: number) => {
    return `${category}-${item.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-${index}`;
  };

  const handleQuantityChange = (
    item: MenuItem,
    newQuantity: number,
    category: string,
    index: number
  ) => {
    const id = generateId(category, item, index);
    const updatedQuantity = Math.max(0, newQuantity);
    setQuantities((prev) => ({ ...prev, [id]: updatedQuantity }));
    if (onItemChange) {
      onItemChange({ ...item, id }, updatedQuantity);
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <section key={section.category}>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <section.icon className="w-6 h-6 mr-2" />
            <span>{section.title}</span>
          </h2>
          <ul className="space-y-2">
            {section.items.map((item, index) => {
              const id = generateId(section.category, item, index);
              return (
                <li key={id}>
                  <Card>
                    <CardContent className="px-4 py-3">
                      <div className="flex flex-row justify-between items-start sm:items-center gap-2">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                          <p className="text-sm font-medium text-zinc-600">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        {enableOrdering && (
                          <div className="flex items-center">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() =>
                                handleQuantityChange(
                                  item,
                                  (quantities[id] || 0) - 1,
                                  section.category,
                                  index
                                )
                              }
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              min="0"
                              value={quantities[id] || 0}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item,
                                  parseInt(e.target.value) || 0,
                                  section.category,
                                  index
                                )
                              }
                              className="w-16 mx-2 text-center"
                              aria-label={`Quantity of ${item.name}`}
                            />
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() =>
                                handleQuantityChange(
                                  item,
                                  (quantities[id] || 0) + 1,
                                  section.category,
                                  index
                                )
                              }
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default MenuItemList;
