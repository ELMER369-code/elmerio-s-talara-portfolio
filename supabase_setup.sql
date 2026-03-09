-- Run this in the Supabase SQL Editor

-- 1. Create the projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    tech_stack TEXT[] DEFAULT '{}',
    tag TEXT,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Insert the existing data
INSERT INTO projects (title, description, image_url, tech_stack, tag, category) VALUES
('BlueChat: Off-Grid Mesh', 'Decentralized Android messaging application allowing secure communication via Bluetooth sockets in areas without internet coverage.', './assets/bluechat.jpg', ARRAY['Android SDK', 'Java/Kotlin', 'Bluetooth API'], 'Mobile App', 'Software'),
('Pass Vault', 'A secure password management application designed to store and encrypt personal credentials, ensuring data privacy and ease of access.', './assets/passvault.jpg', ARRAY['React Native', 'Encryption', 'Database'], 'Mobile App', 'Software'),
('Biometric Fraud Detection System', 'A Machine Learning model designed for forensic analysis, capable of distinguishing genuine signatures from forgeries with high accuracy using pattern recognition.', './assets/signature.jpg', ARRAY['Python', 'TensorFlow/PyTorch', 'Image Processing'], 'AI/Software', 'Software'),
('Magnetic Levitator', 'A control systems project demonstrating magnetic levitation using PID control loops to stabilize a magnet in mid-air.', './assets/maglev.jpg', ARRAY['Analog Electronics', 'PID Control', 'Electromagnetism'], 'Pure Hardware', 'Hardware'),
('Discrete Logic ALU Prototype', 'A 3-bit binary multiplier built entirely from discrete transistors. A demonstration of first-principles engineering without using ICs or microcontrollers.', './assets/multiplier.jpg', ARRAY['Transistors', 'Circuit Design', 'Analog Logic'], 'Pure Hardware', 'Hardware'),
('Custom Bipedal Humanoid', 'End-to-end robotic engineering: Designed in AutoCAD/TinkerCAD, laser-cut chassis, and programmed in C++ for inverse kinematics.', './assets/humanoid.jpg', ARRAY['C++', 'Arduino Pro Mini', 'AutoCAD', 'Laser Cutting'], 'Robotics', 'Embedded System'),
('Pick and Place Rover', 'A robotic rover capable of identifying, picking, and placing objects to designated coordinates. Features a custom mechanical arm and wheeled chassis.', './assets/pick-and-place.jpg', ARRAY['Arduino', 'Robotics', 'Servo Motors'], 'Robotics', 'Embedded System'),
('BAZTEK: Autonomous Environmental Rover', 'An autonomous beach-cleaning robot utilizing YOLOv8 for waste detection and Lidar for obstacle avoidance. Investigating the intersection of Computer Vision and Robotics.', './assets/baztek.png', ARRAY['Raspberry Pi', 'Python', 'YOLOv8', 'Arduino', 'Lidar'], 'System Integration', 'Embedded System');

-- 3. Set up Row Level Security (RLS) policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow anyone to READ the projects
CREATE POLICY "Public Read Access" 
ON projects FOR SELECT 
USING (true);

-- Allow only authenticated users (you) to insert/update/delete
CREATE POLICY "Auth Insert Access" 
ON projects FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Auth Update Access" 
ON projects FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Auth Delete Access" 
ON projects FOR DELETE 
USING (auth.role() = 'authenticated');
