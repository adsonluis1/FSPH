import Router from 'express';
import chkauth from '../helpers/auth.js'
import fileDirName from '../helpers/file-dir-name.js';
import { CadastrosController } from '../controllers/cadastrosControllers.js';

const { __dirname } = fileDirName(import.meta);
const router = Router();

const options = {
    root: __dirname.replace('routers','views')
}

router.set('view engine', 'html');
router.use(chkauth);

/***************************************************************************
* Rotas para Menu de Cadastros
****************************************************************************/
router.get('/',(req,res) => {
    res.status(200).sendFile('/cadastros/menu_cadastros.html',options);
});

/***************************************************************************
* Rotas para Tipo Atendimentos
****************************************************************************/
router.get('/tipo-atend/',CadastrosController.TiposAtendimentos)
router.post('/tipo-atend/listar',CadastrosController.ListarTipoAtend)
router.post('/tipo-atend/editar',CadastrosController.EditarTipoAtend)
router.post('/tipo-atend/salvar',CadastrosController.SalvarTipoAtend)
router.post('/tipo-atend/excluir',CadastrosController.ExcluirTipoAtend)

/****************************************************************************
* Rotas para Conselhos
****************************************************************************/
router.get('/conselhos/',CadastrosController.Conselhos);
router.post('/conselhos/listar',CadastrosController.ListarConselhos);
router.post('/conselhos/editar',CadastrosController.EditarConselhos);
router.post('/conselhos/salvar',CadastrosController.SalvarConselhos);
router.post('/conselhos/excluir',CadastrosController.ExcluirConselhos);

/****************************************************************************
* Rotas para Enfermarias
****************************************************************************/
router.get('/enfermarias/',CadastrosController.Enfermarias);
router.post('/enfermarias/listar',CadastrosController.ListarEnfermarias);
router.post('/enfermarias/editar',CadastrosController.EditarEnfermarias);
router.post('/enfermarias/salvar',CadastrosController.SalvarEnfermarias);
router.post('/enfermarias/excluir',CadastrosController.ExcluirEnfermarias);

/****************************************************************************
* Rotas para Leitos
****************************************************************************/
router.get('/leitos/',CadastrosController.Leitos);
router.post('/leitos/listar',CadastrosController.ListarLeitos);
router.post('/leitos/editar',CadastrosController.EditarLeitos);
router.post('/leitos/salvar',CadastrosController.SalvarLeitos);
router.post('/leitos/excluir',CadastrosController.ExcluirLeitos);

/****************************************************************************
* Rotas para Especialidades
****************************************************************************/
router.get('/especialidades/',CadastrosController.Especialidades);
router.get('/especialidades/aux_especialidade',CadastrosController.ListarAuxEspecialidade);
router.post('/especialidades/listar',CadastrosController.ListarEspecialidades);
router.post('/especialidades/editar',CadastrosController.EditarEspecialidades);
router.post('/especialidades/salvar',CadastrosController.SalvarEspecialidades);
router.post('/especialidades/excluir',CadastrosController.ExcluirEspecialidades);

/****************************************************************************
* Rotas para Vinculos
****************************************************************************/
router.get('/vinculos/',CadastrosController.Vinculos);
router.post('/vinculos/listar',CadastrosController.ListarVinculos);
router.post('/vinculos/editar',CadastrosController.EditarVinculos);
router.post('/vinculos/salvar',CadastrosController.SalvarVinculos);
router.post('/vinculos/excluir',CadastrosController.ExcluirVinculos);

/****************************************************************************
* Rotas para Profissionais
****************************************************************************/
router.get('/profissionais/',CadastrosController.Profissionais);
router.post('/profissionais/editar',CadastrosController.EditarProfissionais);
router.post('/profissionais/listar',CadastrosController.ListarProfissionais);
router.post('/profissionais/salvar',CadastrosController.SalvarProfissionais);
router.post('/profissionais/excluir',CadastrosController.ExcluirProfissionais);

/****************************************************************************
* Rotas para Motivos de Encerramentos
****************************************************************************/
router.get('/motivo_encerra/',CadastrosController.MotivoEncerra);
router.post('/motivo_encerra/listar',CadastrosController.ListarMotivoEncerra);
router.post('/motivo_encerra/editar',CadastrosController.EditarMotivoEncerra);
router.post('/motivo_encerra/salvar',CadastrosController.SalvarMotivoEncerra);
router.post('/motivo_encerra/excluir',CadastrosController.ExcluirMotivoEncerra);

/****************************************************************************
* Rotas para Regime Atendimentos
****************************************************************************/
router.get('/regime_atend/',CadastrosController.RegimeAtend);
router.post('/regime_atend/listar',CadastrosController.ListarRegimeAtend);
router.post('/regime_atend/editar',CadastrosController.EditarRegimeAtend);
router.post('/regime_atend/salvar',CadastrosController.SalvarRegimeAtend);
router.post('/regime_atend/excluir',CadastrosController.ExcluirRegimeAtend);

/****************************************************************************
* Rotas para Turnos de Trabalho
****************************************************************************/
router.get('/turnos/',CadastrosController.Turnos);
router.post('/turnos/listar',CadastrosController.ListarTurnos);
router.post('/turnos/editar',CadastrosController.EditarTurnos);
router.post('/turnos/salvar',CadastrosController.SalvarTurnos);
router.post('/turnos/excluir',CadastrosController.ExcluirTurnos);

/****************************************************************************
* Rotas para Procedimentos
****************************************************************************/
router.get('/procedimentos/',CadastrosController.Procedimentos);
router.post('/procedimentos/listar',CadastrosController.ListarProcedimentos);
router.post('/procedimentos/editar',CadastrosController.EditarProcedimento);
router.post('/procedimentos/salvar',CadastrosController.SalvarProcedimento);
router.post('/procedimentos/excluir',CadastrosController.ExcluirProcedimento);

/****************************************************************************
* Rotas para Tipo de Prescrição
****************************************************************************/
router.get('/tipos_prescricoes/',CadastrosController.TiposPrescricao);
router.post('/tipos_prescricoes/listar',CadastrosController.ListarTiposPrecricoes);
router.post('/tipos_prescricoes/editar',CadastrosController.EditarTipoPrescricao);
router.post('/tipos_prescricoes/excluir',CadastrosController.ExcluirTipoPrescricao);
router.post('/tipos_prescricoes/salvar',CadastrosController.SalvarTipoPrescricao);

/****************************************************************************
* Rotas para Tipo de Procedimento
****************************************************************************/
router.get('/tipos_procedimentos/',CadastrosController.TiposProcedimentos);
router.post('/tipos_procedimentos/listar',CadastrosController.ListarTiposProcedimentos);
router.post('/tipos_procedimentos/editar',CadastrosController.EditarTipoProcedimento);
router.post('/tipos_procedimentos/excluir',CadastrosController.ExcluirTipoProcedimento);
router.post('/tipos_procedimentos/salvar',CadastrosController.SalvarTipoProcedimento);

/****************************************************************************
* Rotas para Procedimento das Especialidade 
****************************************************************************/
router.post('/esp_procedimentos/excluir',CadastrosController.ExcluirEspProcedimento);

/****************************************************************************/
export default router;