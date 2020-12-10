import { Cliente } from 'src/app/models/cliente';
import { Fornecedor } from 'src/app/models/fornecedor';
import { ClienteValidantion } from './model/cliente-validantion';
import { FornecedorValidantion } from './model/fornecedor-validantion';

export class Validations {
    static ClienteValidation(cliente: Cliente): ClienteValidantion {
        const clienteValidantion = new ClienteValidantion();

        clienteValidantion.cliente.nome = getNameClienteErrorMessage(cliente);

        clienteValidantion.cliente.cpf = getCpfClienteErrorMessage(cliente);

        clienteValidantion.cliente.endereco = getEnderecoClienteErrorMessage(cliente);

        clienteValidantion.cliente.telefone = getTelefoneClienteErrorMessage(cliente);

        if(clienteValidantion.cliente.nome || clienteValidantion.cliente.cpf || 
            clienteValidantion.cliente.endereco || clienteValidantion.cliente.telefone){

            clienteValidantion.isError = true

        }
        return clienteValidantion;
    }

    static FornecedorValidation(fornecedor: Fornecedor): FornecedorValidantion {
        const fornecedorValidantion = new FornecedorValidantion();

        fornecedorValidantion.fornecedor.nome = getNameFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.fornecedor.cnpj = getCnpjFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.fornecedor.endereco = getEnderecoFornecedorErrorMessage(fornecedor);

        fornecedorValidantion.fornecedor.telefone = getTelefoneFornecedorErrorMessage(fornecedor);

        if(fornecedorValidantion.fornecedor.nome || fornecedorValidantion.fornecedor.cnpj || 
            fornecedorValidantion.fornecedor.endereco || fornecedorValidantion.fornecedor.telefone){

                fornecedorValidantion.isError = true

        }
        return fornecedorValidantion;
    }
}
export function getNameClienteErrorMessage(cliente: Cliente): string {
    return !cliente.nome ? 'Por favor informe o nome do cliente!' : '';
}
export function getCpfClienteErrorMessage(cliente: Cliente): string {
    return !cliente.cpf ? 'Por favor informe o cpf do cliente!' : '';
}
export function getEnderecoClienteErrorMessage(cliente: Cliente): string {
    return !cliente.endereco ? 'Por favor informe o endereço do cliente!' : '';
}
export function getTelefoneClienteErrorMessage(cliente: Cliente): string {
    return !cliente.telefone ? 'Por favor informe o telefone do cliente!' : '';
}

export function getNameFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.nome ? 'Por favor informe o nome do fornecedor!' : '';
}
export function getCnpjFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.cnpj ? 'Por favor informe o cpf do fornecedor!' : '';
}
export function getEnderecoFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.endereco ? 'Por favor informe o endereço do fornecedor!' : '';
}
export function getTelefoneFornecedorErrorMessage(fornecedor: Fornecedor): string {
    return !fornecedor.telefone ? 'Por favor informe o telefone do fornecedor!' : '';
}
