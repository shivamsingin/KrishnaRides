# Fleet Vehicle Images Management Guide

## How to Change Vehicle Images

The Krishna Cabs fleet images are managed through the `vehicleImages` configuration object in `client/src/pages/fleet.tsx`.

### Method 1: Using Online Images
1. Open `client/src/pages/fleet.tsx`
2. Find the `vehicleImages` object at the top
3. Replace any URL with a new image URL
4. Example:
   ```javascript
   "innova-hycross": "https://your-new-image-url.com/image.jpg"
   ```

### Method 2: Using Local Images
1. Place your new image file in the `attached_assets/` folder
2. Update the corresponding entry in `vehicleImages`:
   ```javascript
   "honda-city": "@assets/your-new-image.jpg"
   ```

### Image Requirements
- **Recommended size**: 1056x594 pixels (16:9 aspect ratio)
- **Formats**: JPG, PNG, WebP
- **Quality**: High resolution for professional appearance
- **Content**: Clear side/front-quarter view of the vehicle

### Current Vehicle Image Keys
- `innova-hycross` - Toyota Innova Hycross (official Toyota India image)
- `innova-crysta` - Toyota Innova Crysta  
- `rumion` - Toyota Rumion (official Toyota India image)
- `honda-city` - Honda City (official Honda India image)
- `honda-amaze` - Honda Amaze
- `maruti-ertiga` - Maruti Ertiga
- `maruti-dzire` - Maruti Dzire (official Maruti Suzuki image)
- `hyundai-aura` - Hyundai Aura

### Adding New Vehicles
1. Add a new entry to the `vehicleImages` object
2. Add the vehicle details to the `fleetVehicles` array
3. Reference the image using the key you created

### Tips
- Use consistent image dimensions for best visual results
- Test images on both desktop and mobile devices
- Consider image loading speed - optimize large files
- Keep backup copies of original images before replacing