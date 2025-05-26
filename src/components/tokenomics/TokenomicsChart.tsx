import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';

interface TokenAllocation {
  name: string;
  value: number;
  color: string;
  description: string;
}

const TokenomicsChart: React.FC = () => {
  const tokenAllocations: TokenAllocation[] = [
    { 
      name: 'Community & Liquidity', 
      value: 40, 
      color: '#6C00FF',
      description: 'Allocated for initial liquidity provision and community incentives.'
    },
    { 
      name: 'Development', 
      value: 20, 
      color: '#00C8FF',
      description: 'Reserved for ongoing development of the SolRat ecosystem and platform.'
    },
    { 
      name: 'Marketing', 
      value: 15, 
      color: '#9D4EDD',
      description: 'Dedicated to marketing campaigns, partnerships, and community growth.'
    },
    { 
      name: 'Team', 
      value: 15, 
      color: '#3F00FF',
      description: 'Allocated to the team members, with a 12-month vesting period.'
    },
    { 
      name: 'Staking Rewards', 
      value: 10, 
      color: '#00FFFF',
      description: 'Reserved for staking incentives and yield farming rewards.'
    }
  ];

  const tokenomicsDetails = [
    {
      title: 'Total Supply',
      value: '1,000,000,000',
      description: 'Fixed supply with no ability to mint additional tokens.'
    },
    {
      title: 'Initial Liquidity',
      value: '30%',
      description: 'Locked for 12 months to ensure project stability.'
    },
    {
      title: 'Transaction Fee',
      value: '1%',
      description: '0.5% to holders, 0.5% to ecosystem development.'
    },
    {
      title: 'Token Burn',
      value: 'Quarterly',
      description: '2% of total supply will be burned quarterly.'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glassmorphism p-4 rounded-lg">
          <p className="font-bold">{payload[0].name}</p>
          <p className="text-accent">{`${payload[0].value}%`}</p>
          <p className="text-sm text-text-muted max-w-2xl mx-auto">{tokenAllocations.find(item => item.name === payload[0].name)?.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A transparent breakdown of SolRat token distribution and utility.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedSection className="w-full lg:w-1/2" direction="left">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenAllocations}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                    animationBegin={200}
                    animationDuration={1500}
                  >
                    {tokenAllocations.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full lg:w-1/2" direction="right">
            <div className="space-y-6">
              {tokenomicsDetails.map((detail, index) => (
                <div 
                  key={index} 
                  className="glassmorphism rounded-xl p-6 border-l-4 border-primary"
                >
                  <h3 className="text-xl font-bold gradient-text mb-2">{detail.title}</h3>
                  <div className="text-2xl text-text-muted max-w-2xl mx-auto">{detail.value}</div>
                  <p className="text-text-muted max-w-2xl mx-auto">{detail.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 glassmorphism rounded-xl p-8" direction="up">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Token Utility</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">Governance</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Vote on key protocol decisions and shape the future of SolRat.</p>
            </div>
            
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">Staking</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Earn rewards by staking your tokens in the SolRat ecosystem.</p>
            </div>
            
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">NFT Access</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Unlock exclusive NFTs and in-game assets with SolRat tokens.</p>
            </div>
            
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">Fee Discounts</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Get reduced fees on all SolRat platform transactions.</p>
            </div>
            
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">Liquidity Mining</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Provide liquidity and earn additional rewards in our pools.</p>
            </div>
            
            <div className="bg-secondary/60 rounded-xl p-6 hover:bg-secondary/80 transition-colors">
              <h4 className="text-xl font-semibold text-accent mb-3">Platform Access</h4>
              <p className="text-text-muted max-w-2xl mx-auto">Access premium features and advanced tools in our ecosystem.</p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default TokenomicsChart;