import { motion } from 'framer-motion'

const experience = [
  {
    period: 'oct. 2023 - aujourd\'hui',
    title: 'Consultant en Gestion et Automatisation · Indépendant',
    bullets: [
      'Conception de solutions sur mesure (Excel/VBA, PowerShell, bases de données, API) avec diagnostic approfondi des workflows',
      'Développement de solutions web avec IA (chatbots, recommandations, analyse prédictive) et architecture de systèmes automatisés',
      'Accompagnement complet : formation, documentation et support pour garantir l\'adoption. Résultats : -60% temps, -75% erreurs',
    ],
    tags: ['Excel/VBA','PowerShell','MySQL','Supabase','Node.js','Python','JavaScript','PHP','WordPress']
  },
  {
    period: 'oct. 2021 - aujourd\'hui',
    title: 'Directeur-fondateur · Workedd CH',
    bullets: [
      'Création d\'une plateforme SaaS automatisant la gestion des candidatures, le suivi des coachings et l\'organisation des ateliers',
      'Coaching personnalisé de 50+ jeunes (CV, entretiens, soft skills) avec outils numériques interactifs et suivi complet du parcours',
      'Itérations rapides basées sur les retours utilisateurs pour optimiser l\'efficacité et améliorer les taux de placement',
    ],
    tags: ['SaaS','Automatisation','Coaching','Gestion de projet']
  },
  {
    period: 'nov. 2023 - juil. 2024',
    title: 'Assistant de direction · Voyages Rémy SA',
    bullets: [
      'Coordination du déploiement Microsoft 365 et gestion Azure (migration Swiss Center, résolution d\'incidents)',
      'Développement de solutions Excel avancées : tableaux de bord interactifs, reportings automatisés, mails programmés',
      'Automatisation des processus (réservations, planification) et support stratégique (marketing, analyses, formation)',
    ],
    tags: ['Microsoft 365','Azure','Excel','Power Query','Power BI','Zapier']
  },
  {
    period: 'sept. 2023 - nov. 2023',
    title: 'Assistant de Direction · Green Brothers Holding SA',
    bullets: [
      'Développement d\'un tableau de bord Excel centralisant les données de marché international pour la prise de décision',
      'Comptabilité internationale (clôtures, rapprochements, écritures intercompagnies) et gestion RH complète (paie, recrutement)',
      'Solution FileMaker centralisant tous les processus métier, avec automatisation VBA/Power Query (-50% saisies manuelles)',
    ],
    tags: ['Excel','VBA','Power Query','FileMaker','Comptabilité']
  },
  {
    period: 'août 2023 - sept. 2023',
    title: 'RH & Aide-Comptable · Capital Services',
    bullets: [
      'Gestion complète de la paie (salaires, prélèvements, déclarations AVS/AC/AI) et comptabilité générale (écritures, rapprochements)',
      'Reporting financier automatisé : tableaux de bord Excel générant automatiquement les rapports mensuels (P&L, balance, KPIs)',
      'Support opérationnel : gestion RH (congés, dossiers, contrats) et formation aux outils internes (Winbiz, Microsoft 365)',
    ],
    tags: ['Comptabilité','RH','Excel','Winbiz']
  },
]

export default function Experience(){
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Expérience</h2>

        <div className="mt-8 space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                {exp.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
