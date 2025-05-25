/*
  # Create contacts and NFTs tables

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `nfts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `image` (text)
      - `rarity` (text)
      - `traits` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create NFTs table
CREATE TABLE IF NOT EXISTS nfts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  image text NOT NULL,
  rarity text NOT NULL,
  traits jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow insert contacts" ON contacts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read contacts" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow read NFTs" ON nfts
  FOR SELECT
  TO authenticated
  USING (true);