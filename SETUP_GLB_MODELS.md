# Setup GLB 3D Models

## 📁 File Structure

Place your GLB files in: `public/models/`

```
public/
  models/
    gun.glb          ← Main pistol model (for homepage)
    pistol.glb       ← Alternative pistol (optional)
    rifle.glb        ← Rifle model (optional)
```

## 🔧 Current Implementation

The code now supports GLB model loading with automatic fallback:

### Gun3DModel.jsx
- Loads GLB from `/models/gun.glb` by default
- Accepts `modelPath` prop for custom paths
- Automatic fallback to geometric shapes if GLB not found
- Slow rotation animation (0.005 rad/frame)
- Subtle floating animation

### Usage Examples:

```jsx
// Default model
<Gun3DModel />

// Custom model path
<Gun3DModel modelPath="/models/pistol.glb" />

// Rifle model
<Gun3DModel modelPath="/models/rifle.glb" />
```

## 📋 Steps to Add Your GLB Files:

1. **Copy your GLB files** to `c:\Users\252342\Desktop\d\dsharp\public\models\`

2. **Rename them** (or update the code):
   - Main pistol → `gun.glb`
   - Rifle → `rifle.glb`

3. **Adjust scale if needed** in Gun3DModel.jsx:
   ```jsx
   <group ref={groupRef} scale={[2, 2, 2]}>  // Increase/decrease scale
   ```

4. **Adjust position** if model is off-center:
   ```jsx
   <group ref={groupRef} position={[0, -0.5, 0]}>  // Move up/down
   ```

5. **Test in browser**: Models should auto-load at http://localhost:5173

## 🎨 Model Requirements:

- **Format**: GLB (binary glTF)
- **Size**: < 5MB recommended
- **Materials**: PBR materials work best
- **Scale**: Adjust in code if needed
- **Orientation**: Model should face forward (+Z axis)

## 🔍 Troubleshooting:

**Model not showing?**
- Check file path: `/models/gun.glb` (no "public" in path)
- Check console for errors
- Verify GLB file is valid
- Try adjusting scale/position

**Model too big/small?**
```jsx
<group scale={[0.5, 0.5, 0.5]}>  // Make smaller
<group scale={[3, 3, 3]}>        // Make bigger
```

**Model facing wrong direction?**
```jsx
<group rotation={[0, Math.PI, 0]}>  // Rotate 180°
<group rotation={[0, Math.PI/2, 0]}> // Rotate 90°
```

## 🚀 Next Steps:

1. Place your GLB files in `public/models/`
2. Refresh browser - models should load automatically
3. Adjust scale/rotation if needed
4. Update Arsenal page to show multiple models

---

Need help? Check browser console for loading errors.
