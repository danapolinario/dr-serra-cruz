import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Artigos: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20 flex-grow bg-slate-50">
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Artigos</h1>
            <h2 className="text-xl text-blue-200">Publicações Científicas</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Artigos (*disponíveis para download)</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 border-b font-semibold">TÍTULO</th>
                      <th className="p-4 border-b font-semibold">REVISTA</th>
                      <th className="p-4 border-b font-semibold w-24">ANO</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/337463882_Ramp_Lesions_An_Unrecognized_Posteromedial_Instability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ramp Lesions An Unrecognized Posteromedial Instability?</a></td>
                      <td className="p-4 border-b">Clinics in Sports Medicine</td>
                      <td className="p-4 border-b">2020</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Vertical-Continuous-Meniscal-Suture-Technique.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vertical Continuous Meniscal Suture of the Knee*</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2020</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/332028663_Modified_Lemaire_Lateral_Tenodesis_Associated_With_an_Intra-Articular_Reconstruction_Technique_With_Bone-Tendon-Bone_Graft_Using_an_Adjustable_Fixation_Mechanism" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Modified Lemaire Lateral Tenodesis Associated With an Intra-Articular Reconstruction Technique With Bone-Tendon-Bone Graft Using an Adjustable Fixation Mechanism</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2019_Surgical-Technique-for-Chronic-Proximal-Patellar-Tendinopathy-Jumpers-Knee_AT_2019.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Surgical Technique for Chronic Proximal Patellar Tendinopathy (Jumper's Knee)*</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2019</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/322540303_Dynamic_Leg_Length_Asymmetry_during_Gait_is_not_a_Valid_Method_for_Estimating_Mild_Anatomic_Leg_Length_Discrepancy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dynamic Leg Length Asymmetry during Gait is not a Valid Method for Estimating Mild Anatomic Leg Length Discrepancy</a></td>
                      <td className="p-4 border-b">Journal of Orthopaedics</td>
                      <td className="p-4 border-b">2018</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/315909235_Internal_and_External_Rotation_Stabilizers_of_the_Knee_with_Intact_Cruciate_and_Collateral_Ligaments_A_Biomechanical_Study" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Internal and External Rotation Stabilizers of the Knee with Intact Cruciate and Collateral Ligaments: A Biomechanical Study</a></td>
                      <td className="p-4 border-b">Orthopaedics Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2017</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/287419784_An_In_Vitro_Robotic_Assessment_of_the_Anterolateral_Ligament_Part_1_Secondary_Role_of_the_Anterolateral_Ligament_in_the_Setting_of_an_Anterior_Cruciate_Ligament_Injury" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">An In Vitro Robotic Assessment of the Anterolateral Ligament, Part 1: Secondary Role of the Anterolateral Ligament in the Setting of an Anterior Cruciate Ligament Injury</a></td>
                      <td className="p-4 border-b">American Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_OJSM_2016_Concentrated-Bone-MArrow-Aspirtate-Concentrate-for-the-treatment-of-Chondral-Injuries-and-OA-of-the-Knee.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Concentrated Bone Marrow Aspirate for the Treatment of Chondral Injuries and Osteoarthritis of the Knee: A Systematic Review of Outcomes *</a></td>
                      <td className="p-4 border-b">Orthopaedics Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/292673247_An_In_Vitro_Robotic_Assessment_of_the_Anterolateral_Ligament_Part_2_Anterolateral_Ligament_Reconstruction_Combined_With_Anterior_Cruciate_Ligament_Reconstruction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">An In Vitro Robotic Assessment of the Anterolateral Ligament, Part 2: Anterolateral Ligament Reconstruction Combined With Anterior Cruciate Ligament Reconstruction</a></td>
                      <td className="p-4 border-b">American Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Inside-Out-Meniscal-Repair_Medial-and-Lateral-Approach.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Inside-Out Meniscal Repair: Medial and Lateral Approach *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Fresh-Osteochondral-Allograft-Transplantation-for-Treatment-of-Articular-Cartilage-Defects-of-the-Knee.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Fresh Osteochondral Allograft Transplantation for Treatment of Articular Cartilage Defects of the Knee *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/295681836_Patellofemoral_Joint_Reconstruction_for_Patellar_Instability_Medial_Patellofemoral_Ligament_Reconstruction_Trochleoplasty_and_Tibial_Tubercle_Osteotomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Patellofemoral Joint Reconstruction for Patellar Instability: Medial Patellofemoral Ligament Reconstruction, Trochleoplasty, and Tibial Tubercle Osteotomy</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Anatomic-Fibular-Collateral-Ligament-Reconstruction.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anatomic Fibular Collateral Ligament Reconstruction *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Medial-Meniscal-Allograft-Transplantation_the-bone-plug-technique.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medial Meniscal Allograft Transplantation: The Bone Plug Technique *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Superficial-Medial-Collateral-Ligament-of-the-Knee_Anatomic-Augmentation-With-Semitendinosus-and-Gracilis-Tendon-Autografts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Superficial Medial Collateral Ligament of the Knee: Anatomic Augmentation With Semitendinosus and Gracilis Tendon Autografts *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Lateral-Meniscal-Allograft-Transplantation_The-Bone-Trough-Technique.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lateral Meniscal Allograft Transplantation: The Bone Trough Technique *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Anterolateral-Biplanar-Proximal-Tibial-Opening-Wedge-Osteotomy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anterolateral Biplanar Proximal Tibial Opening-Wedge Osteotomy *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Anatomic-Posterolateral-Corner-Reconstruction.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anatomic Posterolateral Corner Reconstruction *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/305276726_Anatomic_Anterolateral_Ligament_Reconstruction_of_the_Knee_Leads_to_Overconstraint_at_Any_Fixation_Angle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anatomic Anterolateral Ligament Reconstruction of the Knee Leads to Overconstraint at Any Fixation Angle</a></td>
                      <td className="p-4 border-b">American Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Arthroscopy-Techniques_2016_Medial-Opening-Wedge-Proximal-Tibial-Osteotomy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medial Opening Wedge Proximal Tibial Osteotomy *</a></td>
                      <td className="p-4 border-b">Arthroscopy Techniques</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.researchgate.net/profile/Raphael_Serra_Cruz/publication/308858703_Anatomic_Anterolateral_Ligament_Reconstruction_Leads_to_Overconstraint_at_Any_Fixation_Angle_Response" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Anatomic Anterolateral Ligament Reconstruction Leads to Overconstraint at Any Fixation Angle: Response</a></td>
                      <td className="p-4 border-b">American Journal of Sports Medicine</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_RBO_2016_Compreendendo-as-lesoes-das-raizes-posteriores-dos-meniscos.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Compreendendo as lesões das raízes posteriores dos meniscos: da ciência básica ao tratamento *</a></td>
                      <td className="p-4 border-b">Revista Brasileira de Ortopedia</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-4 border-b"><a href="https://www.drserracruz.com.br/wp-content/uploads/2021/09/Serra-Cruz-R_Tecnicas-em-Ortopedia_2016_Reparo-de-lesoes-das-raizes-posteriores-dos-meniscos_TO_2016.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reparo de lesões das raízes posteriores dos meniscos *</a></td>
                      <td className="p-4 border-b">Técnicas em Ortopedia - HSPE</td>
                      <td className="p-4 border-b">2016</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Artigos;
