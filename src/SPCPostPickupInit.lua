local SPCPostPickupInit = {}

-- Includes
local SPCGlobals = require("src/spcglobals")

-- ModCallbacks.MC_POST_PICKUP_INIT (34)
function SPCPostPickupInit:Main(pickup)
  -- Local variables
  local game = Game()
  local room = game:GetRoom()
  local roomType = room:GetType()
  local type = SPCGlobals.run.babyType
  local baby = SPCGlobals.babies[type]
  if baby == nil then
    return
  end

  --[[
  Isaac.DebugString("MC_POST_PICKUP_INIT - " .. tostring(pickup.Type) .. "." .. tostring(pickup.Variant) .. "." ..
                    tostring(pickup.SubType))
  --]]

  if baby.name == "Shopkeeper Baby" and -- 215
     pickup.Variant == PickupVariant.PICKUP_COLLECTIBLE and
     roomType == RoomType.ROOM_SHOP then -- 2

    pickup.Price = 0

  elseif baby.name == "Wizard Baby" and -- 253
     pickup.Variant == PickupVariant.PICKUP_TAROTCARD then -- 300

    SPCPostPickupInit:CardFaceUp(pickup)

  elseif baby.name == "Scary Baby" and -- 317
         pickup.Variant == PickupVariant.PICKUP_COLLECTIBLE then

    pickup.AutoUpdatePrice = false
    pickup.Price = -1

  elseif baby.name == "Demon Baby" and -- 527
         pickup.Variant == PickupVariant.PICKUP_COLLECTIBLE and
         (roomType == RoomType.ROOM_DEVIL or -- 14
          roomType == RoomType.ROOM_BLACK_MARKET) then -- 22

    pickup.Price = 0

  elseif baby.name == "Fate's Reward" and -- 537
         pickup.Variant == PickupVariant.PICKUP_COLLECTIBLE then

    if (roomType == RoomType.ROOM_DEVIL or -- 14
        roomType == RoomType.ROOM_BLACK_MARKET) then -- 22

      pickup.AutoUpdatePrice = false
    end
    if pickup.Price <= 0 then
      pickup.Price = 15
    end
  end
end

function SPCPostPickupInit:CardFaceUp(pickup)
  -- Make all cards and runes face-up
  if (pickup.SubType >= Card.CARD_FOOL and -- 1
      pickup.SubType <= Card.RUNE_ALGIZ) or -- 39
     -- Blank Rune (40) and Black Rune (41) are handled in Racing+
     pickup.SubType == Card.CARD_CHAOS or -- 42
     -- Credit Card (43) has a unique card back in vanilla
     pickup.SubType == Card.CARD_RULES or -- 44
     -- A Card Against Humanity (45) has a unique card back in vanilla
     pickup.SubType == Card.CARD_SUICIDE_KING or -- 46
     pickup.SubType == Card.CARD_GET_OUT_OF_JAIL or -- 47
     -- (Get out of Jail Free Card has a unique card back in vanilla, but this one looks better)
     pickup.SubType == Card.CARD_QUESTIONMARK or -- 48
     -- Dice Shard (49) has a unique card back in vanilla
     -- Emergency Contact (50) has a unique card back in vanilla
     -- Holy Card (51) has a unique card back in vanilla
     (pickup.SubType >= Card.CARD_HUGE_GROWTH and -- 52
      pickup.SubType <= Card.CARD_ERA_WALK) then -- 54

    local sprite = pickup:GetSprite()
    sprite:ReplaceSpritesheet(0, "gfx/cards/" .. tostring(pickup.SubType) .. ".png")
    sprite:LoadGraphics()
   end
end

return SPCPostPickupInit
