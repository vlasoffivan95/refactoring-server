const STATUS = {
  BRONZE: {
    titleName: 'Bronze',
    description: 'Branding in a budget',
    price: 299,
    prize_to_winner: 135,
    validation_and_upgrade: 'Validation Services & Upgrades ($39 value)',
    validation_and_upgrade_list: ['matching to URL'],
    expected: '300+Entries',
    partial_refund: '',
  },

  GOLD: {
    titleName: 'Gold',
    description: 'Increase participation and basic brand validation',
    price: 449,
    prize_to_winner: 200,
    validation_and_upgrade: 'Validation Services & Upgrades ($305 value) ',
    validation_and_upgrade_list: [
      'Instant Trademark Check (One Database)',
      'NDA and More Privacy',
      'Project Promotion (Basic)',
      'Comprehensive Trademark Research',
    ],
    expected: '600 + Entries',
    partial_refund: 'Partial Refund Option',
  },
  PLATINUM: {
    titleName: 'Platinum',
    description:
      'Work with top-level creatives, plus agency-style brand validation',
    price: 749,
    prize_to_winner: 300,
    validation_and_upgrade: 'Validation Services & Upgrades ($979 value)  ',
    validation_and_upgrade_list: [
      'Audience Testing (Up to 6 Names) View Sample Report',
      'Comprehensive Trademark Research (3 Names) ',
      'Linguistics Analysis (3 Names)',
      'Tier A Creatives',
      'Matching .com URL ',
      'Instant Trademark Check (4 Databases) ',
      'NDA and More Privacy',
      'Enhanced Project Promotion ',
      'Team Collaboration Tools ',
    ],
    expected: '1000 + Entries',
    partial_refund: 'Partial Refund Option',
  },
  MANAGED: {
    titleName: 'Managed',
    description: 'A full agency experience without the agency price tag',
    price: 1499,
    title: `
    Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.
    With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.Learn More about Managed Contest Service
    `,
  },
};

export default STATUS;
